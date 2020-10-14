/* eslint-disable react/destructuring-assignment */
import { graphql } from 'gatsby';
import React from 'react';
import MerchList from '../components/Lists/MerchList';

const MerchPage = (props) => {
  const { merch } = props.data;
  return (
    <>
      <MerchList merch={merch} />
    </>
  );
};

export const query = graphql`
  query merch {
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
        description
      }
    }
  }
`;

export default MerchPage;
