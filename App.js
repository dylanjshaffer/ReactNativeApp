import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Header } from "ReactNativeApp/src/components";
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
    imageUrl: require("ReactNativeApp/src/assets/serenity-bg.jpg")
  };
  getMovie = () => {
    let movie = {};
    MovieDB.searchMovie({ query: "Escape From New" }, (err, res) => {
      movie = res.results[0];
    });
  };
  render() {
    const { title, imageUrl } = this.state;
    return (
      <Container>
        <Header imageUrl={imageUrl} title={title} />
      </Container>
    );
  }
}
