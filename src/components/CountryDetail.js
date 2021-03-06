import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCountry } from '../redux/action'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import loadingImage from '../resources/loading.gif'

function CountryDetail({ data, getCountry, match }) {
    const countryCode = match.params.id
    
    useEffect(() => {
        getCountry(countryCode)
    }, [getCountry, countryCode])
    
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

CountryDetail.propTypes = {
    data: PropTypes.object.isRequired,
    getCountry: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, { getCountry })(CountryDetail) 
