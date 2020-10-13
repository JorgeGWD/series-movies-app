import React from 'react'
import './Card.css'

const Card = ({ data, loading }) => {

    console.log(loading)
    
    return (
        <div className="cards-container">
            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                <>
                    {
                        data.map( (item, key) => (
                            <div className="card" key={key}>
                                <img src={item.images["Poster Art"].url} alt={item.title} />
                                <p key={key}>{item.title}</p>
                            </div>
                        ))
                    }
                </>
            )}
        </div>
      );
}

export default Card
