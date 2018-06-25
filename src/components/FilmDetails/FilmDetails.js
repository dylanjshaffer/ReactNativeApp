import React, { Component, Fragment } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

const Container = styled(View)`
  flex: 1;
  padding: 15px;
`;
const DetailsContainer = styled(View)`
  justify-content: space-between;
  align-items: flex-start;
`;
const OverviewContainer = styled(View)`
  margin-top: 20;
`;
export class FilmDetails extends Component {
  render() {
    const { releaseDate, director, overview, cast } = this.props;
    return (
      <Container>
        <DetailsContainer>
          <Text style={{ color: "white" }}>Relased {releaseDate}</Text>
        </DetailsContainer>
        <OverviewContainer>
          <Text style={{ color: "white", fontSize: 17 }}>{overview}</Text>
        </OverviewContainer>
      </Container>
    );
  }
}
