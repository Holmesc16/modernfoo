import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const countOfTypes = (types) => {
  const obj = {};
  types.nodes
    .map((n) => n.type)
    .forEach((type) =>
      obj.hasOwnProperty(type) ? obj[type]++ : (obj[type] = 1)
    );
  return obj;
};

const MerchFilter = () => {
  // get list of all merch types
  const { types } = useStaticQuery(graphql`
    query {
      types: allSanityMerch {
        nodes {
          type
          id
        }
      }
    }
  `);
  console.log(countOfTypes(types));
  return null;
};

export default MerchFilter;
