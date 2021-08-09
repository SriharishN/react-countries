import React, { useEffect, useState } from 'react'
import { searchCountries } from '../redux/action'
import { useDispatch } from 'react-redux'
import Countries from './Countries'

function SearchBox() {
    const [search, setSearch] = useState('')
    const dispatchSearch = useDispatch();
    useEffect(() => {
        dispatchSearch(searchCountries(search));
    }, [dispatchSearch, search])

    const onChanged = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="search-field">
            <input type="text" onChange={onChanged} value={search}></input>
            <Countries/>
            
            {/* {countries.map((country,index)=>{
                return(  <Countries countries={countries} loader={data_loading} country_loader={country_loading}></Countries>
                <li key={index}>{country.name}</li>)
            })} */}
        </div>
    )
}

export default SearchBox
