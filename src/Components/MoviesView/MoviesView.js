import React from 'react'
import Footer from '../Commons/Footer/Footer'
import Header from '../Commons/Header/Header'
import TitleBar from '../Commons/TitleBar/TitleBar'

const MoviesView = () => {
    return (
        <div className="container">
            <Header />
            <TitleBar text="Popular Movies" />
            <div className="content movies">
                <h1>Movies</h1>
            </div>
            <Footer />
        </div>
    )
}

export default MoviesView
