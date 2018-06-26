import React, { Component } from "react"
import { View, StatusBar, Dimensions } from "react-native"
import { ImageHeader, FilmDetails, SearchBar } from "ReactNativeApp/src/components"
import styled from "styled-components/native"

const { width, height } = Dimensions.get("window")

const MovieDB = require("moviedb")("24758e2d6d872edf774b8e3777b4d0de")

const Container = styled(View)`
  flex: 1;
  height: ${height};
  width: ${width};
  align-items: center;
  justify-content: center;
  background-color: "rgba(0, 0, 0, 0.95)";
  padding-bottom: 25;
`

export default class App extends Component {
  state = {
    title: "Serenity",
    releaseDate: "2005",
    // director: "Joss Whedon",
    overview:
      "When the renegade crew of Serenity agrees to hide a fugitive on their ship, they find themselves in an action-packed battle between the relentless military might of a totalitarian regime who will destroy anything – or anyone – to get the girl back and the bloodthirsty creatures who roam the uncharted areas of space. But... the greatest danger of all may be on their ship.",
    // cast: "Nathan Fillion, Summer Glau, Alan Tudyk",
    imageUrl: "https://image.tmdb.org/t/p/w500/k2qLUz5fymFOOYfehaQt6ewXSth.jpg",
    posterUrl: "https://image.tmdb.org/t/p/w200/z1GmUfqczWl8iizcyf28kwaqbg3.jpg",
    tagline: "Can't stop the signal",
    budget: 39000000,
    genres: [{}],
    revenue: 38869464,
    runtime: 119,
    status: "Released",
    voteAverage: 7.5,
    voteCount: 1610
  }
  getMovie = query => {
    let movie = {}
    MovieDB.searchMovie({ query: query }, (err, res) => {
      movie = res.results[0]
      if (movie) {
        this.setState({
          title: movie.title,
          releaseDate: movie.release_date.substring(0, 4),
          overview: movie.overview,
          imageUrl: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path,
          posterUrl: "https://image.tmdb.org/t/p/w200" + movie.poster_path
        })
        MovieDB.movieInfo({ id: movie.id }, (err, res) => {
          let movieDetails = res
          this.setState({
            tagline: movieDetails.tagline,
            budget: movieDetails.budget,
            genres: movieDetails.genres,
            revenue: movieDetails.revenue,
            runtime: movieDetails.runtime,
            status: movieDetails.status,
            voteAverage: movieDetails.vote_average,
            voteCount: movieDetails.vote_count
          })
        })
      } else {
        alert("No results found")
      }
    })
  }
  render() {
    const { title, imageUrl, posterUrl, releaseDate, overview, tagline, budget, genres, revenue, runtime, status, voteAverage, voteCount } = this.state
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <SearchBar onChange={this.getMovie} />
        <ImageHeader
          imageUrl={imageUrl}
          posterUrl={posterUrl}
          title={title}
          releaseDate={releaseDate}
          runtime={runtime}
          tagline={tagline}
          genres={genres}
          voteAverage={voteAverage}
          voteCount={voteCount}
        />
        <FilmDetails overview={overview} budget={budget} revenue={revenue} status={status} />
      </Container>
    )
  }
}
