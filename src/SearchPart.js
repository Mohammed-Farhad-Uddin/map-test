import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { getSearch } from './actions/searchAction';
import { SEARCH_REQUEST } from './constants/serchContants';
import AddLocationIcon from '@mui/icons-material/AddLocation';





const SearchPart = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const { loading, error, addressInfo } = useSelector((state) => state.searchData);

    useEffect(() => {

    }, [dispatch, search]);
    console.log(addressInfo);

    const onchangehandler = (text) => {
        setSearch(text);
        dispatch(getSearch(search));
    };

    const onSuggesHandler = (value) => {
        setSearch(value);
        dispatch({ type: SEARCH_REQUEST })
    };


    return (
        <div className="container">
            <input type="text" placeholder="Search Location." name="" id=""
                onChange={(e) => onchangehandler(e.target.value)}
                value={search}
            />
            <div className="area-box">
                {
                    addressInfo && addressInfo.map((suggestion) =>
                        <div className="list" key={suggestion.id} onClick={() => onSuggesHandler(`${suggestion.address},${suggestion.area},${suggestion.city}`)} >

                            <div>
                                <AddLocationIcon />
                            </div>
                            <div>
                                <span>{suggestion.address}</span>
                                <br />
                                <span className="tex-color" >{suggestion.area}, {suggestion.city}</span>
                                <br />
                                <span className="block"> <small>{suggestion.pType}</small> </span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );

};

export default SearchPart;