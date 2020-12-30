import { GET_COUNTRY, LOADING_COUNTRY, LOAD_COUNTRIES, SEARCH_COUNTRIES } from "./types";

const initialState = {
    countries:[],
    country:{},
    data_loading: true,
    country_loading: true
}

export default function reducerCall(state=initialState, action){
    switch(action.type){
        case SEARCH_COUNTRIES:
            let country = action.payload.filter(search=> search.name.toLowerCase().startsWith(action.search.toLowerCase()));
            return {
                ...state,
                countries: country,
                data_loading: false,
                country_loading:true
            }

        case LOAD_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            }
        case GET_COUNTRY:
            return {
                ...state,
                data_loading:true,
                country_loading:false,
                country: action.payload
            }
        case LOADING_COUNTRY:
            return{
                ...state,
                loading: true
            }    
        default:
            return state;
    }

}