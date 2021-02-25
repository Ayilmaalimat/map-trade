import React from 'react'
import {Link} from "react-router-dom";
import './Header.css'
import TooltipInWork from "../Tooltips/TooltipInWork";

const Header = props =>{
    return(
        <div className={'header'}>
                <div className="logo"><img src="" alt=""/></div>
                <nav>
                    <Link to="/map-trade">Данные</Link>
                    <TooltipInWork>
                        <Link >О нас</Link>
                    </TooltipInWork>
                </nav>
            </div>
    )
}

export default Header