import axios from 'axios'
import { GET_COUNTRY, LOADING_COUNTRY, LOAD_COUNTRIES, SEARCH_COUNTRIES } from './types'

export const searchCountries = (searchText) => (dispatch) => {
    dispatch({ type: LOADING_COUNTRY })
    axios.get('https://restcountries.eu/rest/v2/all').then(response=>{
        dispatch({
            payload: response.data,
            type: SEARCH_COUNTRIES,
            search: searchText
        })
    })
}

export const getCountries = () => (dispatch) => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response=>{
        dispatch({
            payload:response.data,
            type: LOAD_COUNTRIES
        })
    })
}

export const getCountry = (countryCode) => (dispatch) => {
    dispatch({ type: LOADING_COUNTRY })
    axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).then((response)=>{
        dispatch({
            payload: response.data,
            type: GET_COUNTRY
        })
    })
}