import React, { Component, Fragment } from "react";
import { Text, View, Image, Dimensions, ImageBackground } from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

const HeaderImage = styled(ImageBackground)`
  width: ${width};
  height: 235;
  max-height: 235;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  padding-left: 15;
  padding-right: 15;
  top: 0;
`;
const HeaderGradient = styled(LinearGradient)`
  width: ${width};
  height: 235;
  position: absolute;
`;

export class Header extends Component {
  render() {
    const { imageUrl, title } = this.props;
    return (
      <HeaderImage source={imageUrl}>
        <HeaderGradient colors={["#1b1b1b", "transparent", "#1b1b1b"]} />
        <Text
          style={{
            fontFamily: "futura",
            fontSize: 50,
            fontWeight: "600",
            color: "white"
          }}
        >
          {title}
        </Text>
      </HeaderImage>
    );
  }
}
