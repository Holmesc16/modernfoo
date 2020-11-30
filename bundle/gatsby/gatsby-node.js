import path from 'path';

const template = path.resolve('./src/templates/Merch.js');

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
