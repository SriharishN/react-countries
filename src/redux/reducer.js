import { GET_COUNTRY, LOADING_COUNTRY, LOAD_COUNTRIES, SEARCH_COUNTRIES } from "./types";

const initialState = {
    countries:[],
    country:{},
    loading: true
}

export default function reducerCall(state=initialState, action){
    switch(action.type){
        case SEARCH_COUNTRIES:
            let country = action.payload.filter(search=> search.name.toLowerCase().startsWith(action.search.toLowerCase()));
            return {
                ...state,
                countries: country,
                loading:false
            }

        case LOAD_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            }
        case GET_COUNTRY:
            return {
                ...state,
                loading:false,
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