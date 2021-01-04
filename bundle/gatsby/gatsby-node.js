/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-throw-literal */
/* eslint-disable no-unused-expressions */
import path from 'path';
import fetch from 'isomorphic-fetch';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config({ path: './.env' });

const stripe = require('stripe')(process.env.STRIPE_PUB_KEY);

const template = path.resolve('./src/templates/Merch.js');

async function fetchEtsyMerch({ actions, createNodeId, createContentDigest }) {
  const etsyEndpoint = `https://openapi.etsy.com/v2/listings/active?api_key=${process.env.ETSY_API_KEY}&keywords=cholo&limit=100&includes=MainImage`;
  function getEtsyMerch(url = etsyEndpoint, merchItems = []) {
    return new Promise((resolve, reject) =>
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            throw `${response.status}: ${response.statusText}`;
          }
          response
            .json()
            .then((data) => {
              merchItems = merchItems.concat(data.results);
              if (data.pagination.next_page) {
                getEtsyMerch(
                  (url = `${etsyEndpoint}&offset=${merchItems.length}`),
                  merchItems
                )
                  .then(resolve)
                  .catch(reject);
              } else {
                resolve(merchItems);
              }
            })
            .catch(reject);
        })
        .catch(reject)
    );
  }

  // getEtsyMerch()
  //   .then((etsyMerch) => {
  //     for (const etsyItem of etsyMerch) {
  //       const nodeMeta = {
  //         id: createNodeId(`merch-${etsyItem.listing_id}`),
  //         parent: null,
  //         children: [],
  //         internal: {
  //           type: 'EtsyMerch',
  //           mediaType: 'application/json',
  //           contentDigest: createContentDigest(etsyItem),
  //         },
  //       };
  //       actions.createNode({
  //         ...etsyItem,
  //         ...nodeMeta,
  //       });
  //     }
  //   })
  //   .catch(console.error);
}

export async function sourceNodes(params) {
  await Promise.all([fetchEtsyMerch(params)]);
}

async function flipMerchToPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      merch: allSanityMerch {
        totalCount
        nodes {
          name
          Tags
          _id
          type
          description
          stock
          price
          slug {
            current
          }
        }
      }
    }
  `);
  const pageSize = 10;
  const pageCount = Math.ceil(data.merch.totalCount / pageSize);
  // @TODO: work pagination here

  // Array.from({ length: pageCount }).forEach((_, index) => {
  //   actions.createPage({
  //     path: `/merch/${index + 1}`,
  //     component: template,
  //     context: {
  //       skip: index + pageSize,
  //       currentPage: index + 1,
  //       pageSize,
  //     },
  //   });
  // });

  data.merch.nodes.forEach((merchItem) => {
    const createStripeProduct = (item) =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const { name, description, _id, price } = item;
        const product = await stripe.products.create({
          name,
          id: _id,
          active: true,
          description,
        });
        resolve({ product, price });
        reject((err) => console.log(err));
      });
    const createStripePrice = ({ product, price }) =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const amount = await stripe.prices.create({
          product: product.id,
          unit_amount_decimal: price,
          currency: 'usd',
          billing_scheme: 'per_unit',
        });
        resolve(amount);
        reject((err) => console.log(err));
      });
    // @TODO: create stripe price based on esty price property

    // createStripeProduct(merchItem).then((product) => {
    //   createStripePrice(product).then((price) => console.log(price));
    // });

    actions.createPage({
      path: `merch/${merchItem.slug.current}/`,
      component: template,
      context: {
        slug: merchItem.slug.current,
        item: merchItem.name,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([flipMerchToPages(params)]);
}
