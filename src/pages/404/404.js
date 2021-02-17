import React from 'react'
import './404.css'
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";


const NotFoundPage = props =>{
    return(
        <section className="page_404">
            <Header />
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">

                                <p>Страница не найдена, либо находится в разработке</p>

                                <Link to={'/'} className="link_404">На главную</Link>
                            </div>
        </section>
    )
}

export default NotFoundPage