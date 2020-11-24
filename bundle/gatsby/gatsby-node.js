import path from 'path';

async function flipMerchToPages({ graphql, actions }) {
  const merchTemplate = path.resolve('./src/templates/Merch.js');

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
      component: merchTemplate,
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
