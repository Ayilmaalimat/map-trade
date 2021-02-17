import React from 'react'
import {Link} from "react-router-dom";
import './Header.css'


const Header = props =>{
    return(
        <div className={'header'}>
                <div className="logo"><img src="" alt=""/></div>
                <nav>
                    <Link to="/">Данные</Link>
                    <Link  to="/about">О нас</Link>
                </nav>
            </div>
    )
}

export default Header