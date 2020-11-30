/* eslint-disable no-plusplus */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const MerchTypesStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    background-color: var(--charcoal);
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    color: var(--white);
    text-decoration: none;
    box-shadow: 2px 3px var(--plum);
    align-items: center;
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
      color: var(--plum);
    }
    .clear {
      background: crimson;
    }
  }
  .active-type {
    background: var(--white);
    color: var(--grey);
  }
`;
const countOfTypes = (types) => {
  const obj = {};
  const arr = [];
  types.nodes
    .map((n) => n.type)
    .forEach((type) =>
      obj.hasOwnProperty(type) ? obj[type]++ : (obj[type] = 1)
    );
  for (const key in obj) {
    arr.push({ type: key, count: obj[key] });
  }
  return arr;
};

const MerchFilter = (props) => {
  const { filter } = props;
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
  return (
    <MerchTypesStyles>
      {countOfTypes(types).map((merchType, index) => (
        <Link
          to={`?type=${merchType.type}`}
          key={index}
          className={
            merchType.type ===
            window.location.search.replace(/[?=]|type/gim, '')
              ? 'active-type'
              : ''
          }
        >
          <span className="name">{merchType.type}</span>
          <span className="count">{merchType.count}</span>
        </Link>
      ))}
      {filter ? (
        <Link to="/Merch" className="clear">
          <span className="clear-filter">&#10005;</span>
        </Link>
      ) : (
        ''
      )}
    </MerchTypesStyles>
  );
};

export default MerchFilter;
