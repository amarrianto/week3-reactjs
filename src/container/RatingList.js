import React, { Component } from "react";
import Rating from "./rating/Rating";
import {movieData} from "./movies/MovieData";

export default class RatingList extends Component {
  // initial state movies tipe array,
  state = {
    movies: [],
  };
  // ketika komponen memasuki phase mounted,
  // kita isi state movies dengan movieData yang
  // diambil dari file data
  componentDidMount() {
    this.setState({
      movies: movieData,
    });
  }
  // digunakan untuk up counter vote
  // method ini akan di akses oleh komponen Rating
  // melalui this.props.onVote
  handleUpVote = (movieId) => {
    const movieVote = this.state.movies.map((movie) => {
      // akan mencek id movie
      if (movie.id === movieId) {
        // Object digunakan untuk mengcopy array baru
        // dimana struktur data sama dengan this.state.movies;
        return Object.assign({}, movie, {
          vote_count: movie.vote_count + 1
        });
      } else {
        return movie;
      }
    });
    // state movies diubah data nya
    // hasil dari counting vote.

    this.setState({
      movies: movieVote,
    });
  };
  handleLike = (movieId) => {
    // bisa menggunakan object spread
    // buka kembali di ebook ecmascript tentang spread
    this.setState({
      movies: [
        ...this.state.movies.map((movie) => {
          if (movie.id === movieId) {
            movie.popularity = movie.popularity + 1;
            return movie;
          } else {
            return movie;
          }
        }),
      ],
    });
  };
  render() {
    return (
      <div className="popular">
        <h1>Rating Popular Movie</h1>
        {this.state.movies
          .sort((a, b) => b.vote_count - a.vote_count)
          .map((movie) => (
            <Rating
              id={movie.id}
              poster={`/assets/images/${movie.poster_path}`}
              vote={movie.vote_count}
              popular={movie.popularity}
              rating={movie.vote_average}
              title={movie.title}
              overview={movie.overview}
              onVote={this.handleUpVote}
              onLike={this.handleLike}
            />
          ))}
      </div>
    );
  }
}
