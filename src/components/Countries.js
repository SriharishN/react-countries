import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import loadingImage from '../resources/loading.gif'
import {useSelector} from "react-redux";

function Countries() {
    const { countries, loader } = useSelector(state => state.data);
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

export default Countries
