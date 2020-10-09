import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import MerchList from '../components/MerchList';

const MerchPage = (props) => {
  console.log(props);
  return (
    <>
          <p>Merch goes here for sale fuhl</p>
          <MerchList></MerchList>
    </>
  );
};

export const query = graphql`
  query merchQuery {
    merch: allSanityMerch {
      nodes {
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        name
        price
        stock
        type
      }
    }
  }
`;

export default MerchPage;
