import React from 'react'
import Footer from '../Commons/Footer/Footer'
import Header from '../Commons/Header/Header'
import TitleBar from '../Commons/TitleBar/TitleBar'

const SeriesView = () => {
    return (
        <div className="container">
            <Header />
            <TitleBar text="Popular Series" />
            <div className="content series">
                <h1>Series</h1>
            </div>
            <Footer />
        </div>
    )
}

export default SeriesView
