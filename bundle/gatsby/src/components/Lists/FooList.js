import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const FooBlock = ({ foo }) => {
    return (
        <div className="foo-block">
            {/* <Link to={`/block/${foo.slug.current}`} > */}
            <Img className="foo-img" fluid={foo.image.asset.fluid} alt={foo.name} style={{maxWidth: '350px'}} />
                <h3>
                <span className="mark">{foo.name}</span>
                <p className="foo-desc">{foo.description}</p>
                </h3>
            {/* </Link> */}
        </div>
    )
}

const FooList = props => {
    const { foos } = props
    console.log(props)
    return (
            <div>
                <h1>Foos</h1>
                {foos.nodes.map(foo => (
                    <FooBlock foo={foo} />
                ))}
            </div>
    )
}

export default FooList;
