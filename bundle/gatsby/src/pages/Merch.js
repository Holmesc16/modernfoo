/* eslint-disable react/destructuring-assignment */
import { graphql } from 'gatsby';
import React from 'react';
import MerchList from '../components/MerchList';

const MerchPage = (props) => {
  const { merch } = props.data;
  console.log(merch);
  return (
    <>
      <p>Merch goes here for sale fuhl</p>
      <MerchList />
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
