import React from 'react';

const AppNavbar = ()=>{
    return(
        <div className="nav-top">
            <ul>
                <li className="logo"><a><img src="assets/images/code.png"></img></a></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    )
}

export default AppNavbar;