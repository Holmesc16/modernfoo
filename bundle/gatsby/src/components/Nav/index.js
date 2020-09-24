import React from 'react'
import { Link } from 'gatsby'

export default Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/merch">Merch</Link>
                </li>
                <li>
                    <Link to="/order">Order</Link>
                </li>
                <li>
                    <Link to="/fools">Fools</Link>
                </li>
            </ul>
        </nav>
    )
}