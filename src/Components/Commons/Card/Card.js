import React from 'react'

const Card = ({ data, loading }) => {

    if(loading) {
        return <p>Loading...</p>
    }
    
    return (
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
    )
}

export default Card
