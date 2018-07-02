import React, { Component } from "react"
import { View, TextInput, Dimensions, Text, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import ElevatedView from "react-native-elevated-view"
import SearchableDropdown from "react-native-searchable-dropdown"
import Autocomplete from "react-native-autocomplete-input"
import { Body } from "ReactNativeApp/src/components"

const MovieDB = require("moviedb")("24758e2d6d872edf774b8e3777b4d0de")

const { width } = Dimensions.get("window")

const Container = styled(ElevatedView)`
  flex-direction: row;
  width: ${width};
  height: 50;
  justify-content: center;
  align-items: center;
  margin-top: 20;
  padding-left: 15;
  padding-right: 15;
  top: 0;
  z-index: 1000;
`
const SearchInput = styled(TextInput)`
  width: 100%;
  background-color: #bdbdbd;
  border-radius: 25;
  padding: 10px;
  margin-top: 10;
`

export class SearchBar extends Component {
  state = { title: "", query: "", movies: [] }
  getMovies = query => {
    let movies = []
    if (query != "") {
      MovieDB.searchMovie({ query: query }, (err, res) => {
        movies = res.results.slice(0, 5)
        this.setState({ movies: movies })
      })
    }
  }
  onSelectMovie = movie => {
    const { onChange } = this.props
    this.setState({ movies: [] })
    onChange(movie)
  }
  render() {
    const { title, movies, query } = this.state
    const { onChange } = this.props
    return (
      <Container>
        <Autocomplete
          clearButtonMode={"always"}
          containerStyle={{ marginTop: 10 }}
          inputContainerStyle={{ borderRadius: 4, backgroundColor: "#bdbdbd", paddingHorizontal: 5 }}
          listStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}
          renderSeparator={() => <View style={{ width: width, height: 10 }} />}
          style={{ width: width * 0.9, height: 35 }}
          data={movies}
          defaultValue={query}
          onChangeText={text => this.getMovies(text.replace(/[^\w\s]|_/g, ""))}
          renderItem={item => (
            <TouchableOpacity onPress={() => this.onSelectMovie(item.title)}>
              <Body mode="dark">{item.title}</Body>
            </TouchableOpacity>
          )}
        />
      </Container>
    )
  }
}
