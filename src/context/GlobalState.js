import React, { createContext, useReducer, useState, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    language: 'EN',
    mediaQuery: {
        desktop: 992,
        tablet: 800,
        phone: 576,
    }
}

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    //actions
    function updateProducts() {
        dispatch({
            type: 'UPDATE_ALLPRODUCTS'
        });
    }

    return (
        <GlobalContext.Provider value={{
            language: state.language,
            mediaQuery: state.mediaQuery, 
            dimensions,
            updateProducts,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}