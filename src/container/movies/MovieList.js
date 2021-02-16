import React, { Component } from 'react';
import Movie from './Movie';
import { movieData } from './MovieData';
import './MovieList.css';

export default class ListMovies extends Component {

    render() {

        const gallery = movieData.map((movie) => {
            return (
    
                <Movie
                    title={movie.title}
                    poster={movie.poster_path}
                    date={movie.release_date}
                    rating={movie.vote_average}
                    hd={movie.video}
                />

            );
        });
        return <div className="movies">{gallery}</div>;
    }
}