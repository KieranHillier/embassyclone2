import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    language: 'EN'
}

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function updateProducts() {
        dispatch({
            type: 'UPDATE_ALLPRODUCTS'
        });
    }

    return (
        <GlobalContext.Provider value={{
            language: state.language, 
            updateProducts
        }}>
            {children}
        </GlobalContext.Provider>
    )
}