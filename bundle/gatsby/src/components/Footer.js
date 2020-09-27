import React from 'react';

const Footer = () => {
    return (
    <div>
        <p>&copy; Modern Foo <small>est.</small> {new Date().getFullYear()}</p>
    </div>
    )
}

export default Footer;