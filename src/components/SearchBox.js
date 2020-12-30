import React, { useEffect, useState } from 'react'
import { searchCountries } from '../redux/action'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Countries from './Countries'

function SearchBox({ data, searchCountries }) {
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        searchCountries(search)
    }, [searchCountries, search])

    const onChanged = (event) => {
        setSearch(event.target.value);
    }

    const { countries, data_loading, country_loading } = data

    return (
        <div className="search-field">
            <input type="text" onChange={onChanged} value={search}></input>
            <Countries countries={countries} loader={data_loading} country_loader={country_loading}></Countries>
            
            {/* {countries.map((country,index)=>{
                return(
                <li key={index}>{country.name}</li>)
            })} */}
        </div>
    )
}

SearchBox.propTypes = {
    data: PropTypes.object.isRequired,
    searchCountries: PropTypes.func.isRequired
}

const mapStateToProps = (state) =>({
    data: state.data
})


export default connect(mapStateToProps, { searchCountries })(SearchBox)
