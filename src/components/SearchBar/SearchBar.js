import React, { Component } from "react"
import { TextInput, Dimensions } from "react-native"
import styled from "styled-components/native"
import ElevatedView from "react-native-elevated-view"

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
`
const SearchInput = styled(TextInput)`
  width: 100%;
  background-color: #bdbdbd;
  border-radius: 25;
  padding: 10px;
  margin-top: 10;
`

export class SearchBar extends Component {
  state = {
    title: ""
  }
  render() {
    const { title } = this.state
    const { onChange } = this.props
    return (
      <Container elevation={5}>
        <SearchInput
          placeholder="Enter a title..."
          clearTextOnFocus={true}
          onChangeText={text => {
            this.setState({
              title: text.replace(/[^\w\s]|_/g, "")
            })
          }}
          onSubmitEditing={() => onChange(title)}
        />
      </Container>
    )
  }
}
