import React from 'react';

const Footer = ()=>{
    return(
        <div className="footer">
            <h2>
                &copy; CodeId Academy
                {new Date().getFullYear()}
            </h2>
        </div>
    )
}

export default Footer;