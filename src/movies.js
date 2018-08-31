import React, { Component } from "react";
import NameFilter from "./NameFilter";
import RatingFilter from "./RatingFilter";
import MovieList from "./MovieList";
import HOC from "./Hoc";
import Spinner from "./Spinner/Spinner";
import "./Spinner/Spinner.css";





const justiceleague = {
  id: "JL",
  title: "JUSTICE LEAGUE",
  rating: 4,
  image:
    "http://fr.web.img6.acsta.net/c_300_300/pictures/17/10/19/17/37/0337025.jpg",
  year: 2015
};

const harrypotter = {
  id: "HP",
  title: "Harry Potter",
  rating: 4,
  image:
    "https://imgc.allpostersimages.com/img/print/affiches/harry-potter-and-the-deathly-hallows-part-ii_a-G-8638166-0.jpg",
  year: 2001
};

const indianajohns = {
  id: "IJ",
  title: "Indiana Johns",
  rating: 4,
  image: "http://www.paninimania.com/files/15/4/932b.jpg",
  year: 1994
};
const tombraider = {
  id: "TB",
  title: "Tomb Raider",
  rating: 4,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71G0glxY4OL._SY445_.jpg",
  year: 2017
};
const ghostintheshell = {
  id: "GINS",
  title: "Ghost in the Shell",
  rating: 5,
  image:
    "https://img.moviepostershop.com/ghost-in-the-shell-movie-poster-2017-1020777391.jpg",
  year: 2017
};
const passengers = {
  id: "passengers",
  title: "Passengers",
  rating: 2,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51aM9---oSL._SY450.jpg",
  year: 2016
};
const lucy = {
  id: "Lucy",
  title: "Lucy",
  rating: 4,
  image:
    "http://fr.web.img5.acsta.net/r_1280_720/pictures/14/06/05/09/47/324245.jpg",
  year: 2014
};
const mother = {
  id: "Mother",
  title: "Mother",
  rating: 3,
  image: "https://images-na.ssl-images-amazon.com/images/I/51rT9fN2CKL.jpg",
  year: 2017
};
const passenger = {
  id: "Passgrs",
  title: "Passengers",
  rating: 5,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71JhTHlwg3L._SY717_.jpg",
  year: 2014
};
const moviesToDisplay = [
  justiceleague,
  harrypotter,
  indianajohns,
  tombraider,
  ghostintheshell,
  passengers,
  lucy,
  mother,
  passenger
];

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true ,
      minRatingFilter: 4,
      movies: moviesToDisplay,
      titleFilter: ""
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000); // simulates an async action, and hides the spinner
  }

  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    });
  }

  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title
          .toLowerCase()
          .includes(this.state.titleFilter.toLowerCase().trim())
    );
  }
  render() {
    const { loadingTime } = this.props;
    const { loading } = this.state;
    if (loading) {
      return <Spinner />;
    } else {

    return (

      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={newTitleFilter => {
              this.setState({
                titleFilter: newTitleFilter
              });
            }}
          />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={newRating => {
              this.setState({
                minRatingFilter: newRating
              });
            }}
          />
        </header>
        <main className="movie-app-main">
          <MovieList
            movies={this.getVisibleMovies()}
            onAddMovie={newMovie => this.addNewMovie(newMovie)}
          />
        </main>
      </div>
    );
  }
}

}

export default Movie;
