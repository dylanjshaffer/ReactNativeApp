import React, { Component } from "react"
import { View, Image, Dimensions, ImageBackground } from "react-native"
import styled from "styled-components/native"
import LinearGradient from "react-native-linear-gradient"
import ElevatedView from "react-native-elevated-view"
import { Subhead, Caption } from "ReactNativeApp/src/components"

const { width } = Dimensions.get("window")

const HeaderImage = styled(ImageBackground)`
  width: ${width};
  height: 235;
  max-height: 235;
  justify-content: center;
  align-items: center;
  padding-left: 15;
  padding-right: 15;
  top: 0;
  margin-top: 10;
`
const HeaderGradient = styled(LinearGradient)`
  width: ${width};
  height: 235;
  position: absolute;
`
const InfoContainer = styled(View)`
  flex-direction: row;
  width: ${width};
  padding-left: 20;
  padding-right: 20;
`

export class ImageHeader extends Component {
  render() {
    const { imageUrl, posterUrl, title, runtime, tagline, genres, voteAverage, voteCount, releaseDate } = this.props
    return (
      <HeaderImage source={{ uri: imageUrl }}>
        <HeaderGradient colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.95)"]} />
        <InfoContainer>
          <ElevatedView elevation={5}>
            <Image source={{ uri: posterUrl }} resizeMode="contain" style={{ width: 140, height: 180, marginRight: 15 }} />
          </ElevatedView>
          <View style={{ flex: 1, justifyContent: "center", paddingVertical: 20 }}>
            <Subhead fontWeight="bold" content={title} />
            <Caption fontWeight="thin" content={releaseDate + " • " + runtime + " minutes"} />
            <View style={{ flexDirection: "row" }}>
              <Image source={require("ReactNativeApp/src/assets/star.png")} style={{ height: 12, width: 12, alignSelf: "center", marginRight: 3 }} />
              <Caption fontWeight="thin" content={voteAverage + " (" + voteCount + " ratings)"} />
            </View>
            <Caption fontWeight="bold" content={tagline} style={{ marginTop: 10 }} />
          </View>
        </InfoContainer>
      </HeaderImage>
    )
  }
}
