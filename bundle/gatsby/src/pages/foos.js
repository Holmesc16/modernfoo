import React from 'react';
import FooList from '../components/FooList';
import { graphql } from 'gatsby';

const FoosPage = props => {
    console.log(props.data)
  return (
    <>
      <FooList />
    </>
  );
};

export const query = graphql`
  query fooQuery {
    allSanityPerson {
      nodes {
        description
        id
        slug {
          current
        }
        name
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default FoosPage;
