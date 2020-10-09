import React, { useState } from 'react'
import './Home.css'
import Series from '../../assets/img-series.jpg'
import Movies from '../../assets/img-movies.jpg'
import {
    Link
  } from "react-router-dom";
  import Header from '../Commons/Header/Header'
  import TitleBar from '../Commons/TitleBar/TitleBar'
  import Footer from '../Commons/Footer/Footer'

const Home = () => {

    const [ data ] = useState([
        {
            img: Series,
            title: "series",
            description: "Popular Series",
            link: "/series"
        },
        {
            img: Movies,
            title: "movies",
            description: "Popular Movies",
            link: "/movies"
        }
    ])

    return (
        <div className="container">
            <Header />
            <TitleBar />
            <div className="content home">
                {
                    data.map((data, key) =>
                        <Link to={data.link} key={key}>
                            <div className="card">
                                <img src={data.img} alt={data.title} />
                                <p>{data.description}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home
