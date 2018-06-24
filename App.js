import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Header, FilmDetails } from "ReactNativeApp/src/components";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

const MovieDB = require("moviedb")("24758e2d6d872edf774b8e3777b4d0de");

const Container = styled(View)`
  flex: 1;
  height: ${height};
  width: ${width};
  align-items: center;
  justify-content: center;
  background-color: #1b1b1b;
`;

type Props = {};
export default class App extends Component<Props> {
  state = {
    title: "Serenity",
    releaseDate: "2005",
    director: "Joss Whedon",
    overview:
      "When the renegade crew of Serenity agrees to hide a fugitive on their ship, they find themselves in an action-packed battle between the relentless military might of a totalitarian regime who will destroy anything – or anyone – to get the girl back and the bloodthirsty creatures who roam the uncharted areas of space. But... the greatest danger of all may be on their ship.",
    cast: "Nathan Fillion, Summer Glau, Alan Tudyk",
    imageUrl: require("ReactNativeApp/src/assets/serenity-bg.jpg")
  };
  getMovie = () => {
    let movie = {};
    MovieDB.searchMovie({ query: "Escape From New" }, (err, res) => {
      movie = res.results[0];
    });
  };
  render() {
    const {
      title,
      imageUrl,
      releaseDate,
      overview,
      director,
      cast
    } = this.state;
    return (
      <Container>
        <Header imageUrl={imageUrl} title={title} />
        <FilmDetails
          releaseDate={releaseDate}
          overview={overview}
          director={director}
          cast={cast}
        />
      </Container>
    );
  }
}
