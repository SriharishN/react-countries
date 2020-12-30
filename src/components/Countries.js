import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import loadingImage from '../resources/loading.gif'

function Countries(props) {
    const { countries, loader } = props;  
    let countryMarkUp = countries.map((country)=>
    <Link key={country.alpha3Code} to={`/country/${country.alpha3Code.toLowerCase()}`}>
    <Card 
    countryName={country.name} 
    flag={country.flag}
    capital={country.capital}
    region={country.region}
    ></Card>
    </Link>

)
    return (
        <div className="countries-div">
        {loader? (
            <div className="loading-data">
            <img src={loadingImage} alt="loader"/>
        </div>
        ):(
        <div className="grid-container">
        {countryMarkUp}
        </div>) }
        </div>
    )
}

Countries.propTypes = {
    countries: PropTypes.array.isRequired
}


export default Countries
