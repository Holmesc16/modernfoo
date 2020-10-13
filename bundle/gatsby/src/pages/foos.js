import React from 'react';
import { graphql } from 'gatsby';
import FooList from '../components/Lists/FooList';

const FoosPage = (props) => {
  const { foos } = props.data;
  return (
    <>
      <FooList foos={foos} />
    </>
  );
};

export const query = graphql`
  query foos {
    foos: allSanityPerson {
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
