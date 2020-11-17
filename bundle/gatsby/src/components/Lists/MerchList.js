import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const MerchGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
`;

const MerchStyles = styled.div`
  display: grid;
  //'subgrid' not working not in chrome
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: 350px auto;
  }
  grid-row: span 3;
  grid-gap: 1rem;
  h3,
  span {
    margin: 0;
  }
`;

const MerchItem = ({ item }) => (
  <MerchStyles className="merch-item">
    <Img fluid={item.imageGallery[0].asset.fluid} alt={item.name} />
    <Link to={`/merch/${item.slug.current}`}>
      <h3>
        <span className="mark">{item.name}</span>
      </h3>
    </Link>
  </MerchStyles>
);

const MerchList = (props) => {
  const { merch } = props;
  return (
    <>
      <h1>Available Merchandise</h1>
      <MerchGridStyles className="merch">
        {merch.nodes.map((m) => (
          <MerchItem item={m} key={m.id} />
        ))}
      </MerchGridStyles>
    </>
  );
};

export default MerchList;
