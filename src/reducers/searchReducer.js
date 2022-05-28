import {SEARCH_REQUEST,SEARCH_SUCCESS,SEARCH_FAIL} from "../constants/serchContants";


export const searchReducer = (state = { addressInfo: [] }, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                loading: true,
                addressInfo: [],
            };
        case SEARCH_SUCCESS:
            return {
                loading: false,
                addressInfo: action.payload,
            };
        case SEARCH_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};