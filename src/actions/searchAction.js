import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL } from "../constants/serchContants";



export const getSearch = (search) => (dispatch) => {

    dispatch({ type: SEARCH_REQUEST });

    fetch(`https://barikoi.xyz/v1/api/search/autocomplete/MzQwNDpIMDdEN1ROWllY/place?q=${search}`)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: SEARCH_SUCCESS, payload: data.places })
        })
        .catch(error => {
            dispatch({
                type: SEARCH_FAIL,
                payload: error.message,
            });
        })

};