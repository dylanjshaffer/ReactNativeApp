import React, { Component, Fragment } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

const Container = styled(View)`
  flex-direction: row;
  width: ${width};
  height: 60;
  max-height: 235;
  justify-content: center;
  align-items: center;
  margin-top: 20;
  padding-left: 15;
  padding-right: 15;
  top: 0;
`;
const SearchInput = styled(TextInput)`
  width: 100%;
  background-color: #bdbdbd;
  border-radius: 25;
  padding: 10px;
`;

export class SearchBar extends Component {
  state = {
    title: ""
  };
  render() {
    const { title } = this.state;
    const { onChange } = this.props;
    return (
      <Container>
        <SearchInput
          placeholder="Enter a title..."
          clearTextOnFocus={true}
          onChangeText={text => {
            this.setState({ title: text });
          }}
          onSubmitEditing={() => onChange(title)}
        />
      </Container>
    );
  }
}
