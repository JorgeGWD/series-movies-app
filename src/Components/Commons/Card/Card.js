import React from 'react'
import './Card.css'

const Card = ({ data, loading }) => {
    
    return (
        <>
            {loading ? (
                <div className="loading">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="cards-container">
                    {
                        data.map( (item, key) => (
                            <div className="card" key={key}>
                                <img src={item.images["Poster Art"].url} alt={item.title} />
                                <p key={key}>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            )}
        </>
      );
}

export default Card
