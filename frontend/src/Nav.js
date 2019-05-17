import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import './App.css'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            <h3>Movies</h3>
            <p>List of Movies: {movies.length} </p>
        </div>
    )
}

export default Nav;