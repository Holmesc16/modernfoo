import React from 'react';
import { Link } from 'gatsby'

const MerchItem = ({ item }) => {
    return (
        <div>
            <Link to={`/merch/${item.slug.current}`} >
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
        <>
            <h1>Available Merchandise</h1>
            {merch.nodes.map(m => <MerchItem item={m} key={m.id}/>)}
        </>
    );
};

export default MerchList;
