import React, { useState, useContext } from 'react'
import Movie from './Movie';
import { MovieContext } from './MovieContext'
import config from 'react-global-configuration';
const cache = require('global-cache');

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    config.set({
        foo: 'bar',
        bar: {
            baz: 'qux'
        },
        baz: ['qux']
    });

    function global() {
        console.log(config.serialize())
        cache.set('teste',{name:'sdafds', valor:'25366'})

        console.log(cache.get('teste'));
        
    }

    return (
        <div>
            <button onClick={global} >Global</button>
            <div>
                {movies.map(movie => (
                    <Movie name={movie.name} price={movie.price} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
export default MovieList;