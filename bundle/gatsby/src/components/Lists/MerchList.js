import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const MerchItem = ({ item }) => {
    return (
        <div className="merch-item">
            <Link to={`/merch/${item.slug.current}`} >
                <Img fluid={item.imageGallery[0].asset.fluid} alt={item.name} style={{maxWidth: '300px'}}/>
                <h3>
                    <span className="mark">{item.name}</span>
                </h3>
            </Link>
        </div>
    )
}

const MerchList = props => {
   const { merch } = props
    console.log(props)
   return (
        <div class="merch">
            <h1>Available Merchandise</h1>
           {merch.nodes.map(m => (
               <MerchItem item={m} key={m.id} />
           ))}
        </div>
    );
};

export default MerchList;





