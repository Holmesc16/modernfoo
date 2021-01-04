import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import CheckoutButton from '../components/CheckoutButton';

const MerchGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

  button {
    position: relative;
  }
`;

export default function SingleMerchItemPage({ data }) {
  const { merch } = data;
  return (
    <MerchGrid>
      <Img fluid={merch.imageGallery[0].asset.fluid} />
      <div>
        <h2 className="mark">{merch.name}</h2>
        <ul className="tags">
          {merch.Tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <h3>{merch.price}</h3>
        <p>{merch.description}</p>
        {/* <CheckoutButton /> */}
        <button onClick={() => console.log('clicked')}>
          Purchase
        </button>
      </div>
    </MerchGrid>
  );
}

export const query = graphql`
  query($slug: String!) {
    merch: sanityMerch(slug: { current: { eq: $slug } }) {
      name
      id
      description
      Tags
      price
      imageGallery {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
