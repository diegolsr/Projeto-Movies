import React, { useState, createContext } from 'react';
import { useCookies, Cookies } from 'react-cookie';
 
export const MovieContext = createContext();

export const MovieProvider = props => {
    const cokies = new Cookies()

    const [cookies, setCookie, removeCookie] = useCookies([]);

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        },
        {
            name: 'The 100',
            price: '$10',
            id: 23524
        },
    ]);
    setCookie('name', [{ 'name': movies }], { path: '/dsaf/' })
    setCookie('outros', [{ 'name': movies }], { path: '/' })
    console.log(cookies, 'fdgsdf');
    removeCookie('name')

    cokies.set('name2','diego')
  
    // sessionStorage.setItem('name', movies.values)
    // console.log(sessionStorage.getItem('name'));


    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}