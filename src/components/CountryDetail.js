import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../redux/action'
import { Link } from 'react-router-dom'
import loadingImage from '../resources/loading.gif'

function CountryDetail({ match }) {
    const countryCode = match.params.id;
    const data = useSelector(state => state.data);
    const dispatchCountry = useDispatch();

    useEffect(() => {
        dispatchCountry(getCountry(countryCode));
    }, [dispatchCountry, countryCode])
    
    const { country,country_loading } = data
    return (
        <>
        { country_loading? (<div className="loading-data">
            <img src={loadingImage} alt="loader"/>
        </div>) :(
        <>
        <div className="header">
            <Link to="/"><button className="back-button">Back</button></Link>
        </div>
        <div className="country-detail">
        <img src={country.flag} alt={countryCode}/>
         <h1>{country.name}</h1>
         <h3>Country Capital: {country.capital}</h3>
         <h3>Country Native name: {country.nativeName}</h3>
         <h3>Currencies used :</h3>
             <h4>{country.currencies.map((currency,index)=>
             <li key={index}>{currency.name}</li>
         ) }  </h4>
        </div>
        </>
        )}
        </>
        
    )
}

export default CountryDetail
