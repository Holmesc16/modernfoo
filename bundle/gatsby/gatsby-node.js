/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-throw-literal */
/* eslint-disable no-unused-expressions */
import path from 'path';
import fetch from 'isomorphic-fetch';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

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

  getEtsyMerch()
    .then((etsyMerch) => {
      for (const etsyItem of etsyMerch) {
        const nodeMeta = {
          id: createNodeId(`merch-${etsyItem.listing_id}`),
          parent: null,
          children: [],
          internal: {
            type: 'Thing',
            mediaType: 'application/json',
            contentDigest: createContentDigest(etsyItem),
          },
        };
        actions.createNode({
          ...etsyItem,
          ...nodeMeta,
        });
      }
    })
    .catch(console.error);
}

export async function sourceNodes(params) {
  await Promise.all([fetchEtsyMerch(params)]);
}

async function flipMerchToPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      merch: allSanityMerch {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.merch.nodes.forEach((merchItem) => {
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
