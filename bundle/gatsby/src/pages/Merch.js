/* eslint-disable react/destructuring-assignment */
import { graphql } from 'gatsby';
import React from 'react';
import MerchList from '../components/Lists/MerchList';
import MerchFilter from '../components/MerchFilter';

const MerchPage = (props) => {
  const { merch } = props.data;
  const merchFilter = window.location.search.replace(/[?=]|type/gim, '');
  return (
    <>
      <MerchFilter filter={merchFilter} />
      <MerchList merch={merch} filter={merchFilter} />
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
        imageGallery {
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
