import React from 'react';

const Footer = () => {
    return (
    <div className="footer">
        <p>&copy; Modern Foo <small>est.</small> {new Date().getFullYear()}</p>
    </div>
    )
}

export default Footer;