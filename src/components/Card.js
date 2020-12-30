import React from 'react'
function Card({ countryName, flag, capital, region }) {
    
    return (
        <div className="card">
            <img alt={countryName} src={flag} 
            className="card_image"></img>
            <div className="card_container">
                <h3>{countryName}</h3>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
            </div>
            
        </div>
    )
}

export default Card
