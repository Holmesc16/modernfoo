// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
// @TODO - remove later
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

export default {
  siteMetadata: {
    title: `Modern Foo`,
    siteUrl: `https://modernfoo.com`,
    description: `Foo shit`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '09ca9rv7',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-pg',
      options: {
        connectionString: process.env.POSTGRES_CXN_STRING,
        schema: 'public',
        refetchInterval: 60,
      },
    },
  ],
};
