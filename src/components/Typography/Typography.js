import React from "react"
import styled from "styled-components/native"
import { Text } from "react-native"

const light = "rgba(255,255,255,0.8)"
const dark = "rgba(0,0,0,0.8)"

const StyledBaseTypography = styled(Text)`
  text-align: ${prop => prop.textAlign || "left"};
  background-color: transparent;
  font-family: "futura";
  ${prop => (prop.flex != undefined || prop.flex != null ? `flex: ${prop.flex}` : null)}
  color: ${prop => {
    if (prop.mode == "light") return light
    if (prop.mode == "dark") return dark
    if (prop.color) return prop.color
    return light
  }};
`

const BaseTypography = props => (
  <StyledBaseTypography {...props} allowFontScaling={false}>
    {props.content || props.children}
  </StyledBaseTypography>
)

export const Title1 = styled(BaseTypography)`
  font-size: 28;
  font-weight: ${prop => {
    if (prop.fontWeight == "bold") return 500
    if (prop.fontWeight == "thin") return 200
    return 300
  }};
  letter-spacing: 0.364;
`
export const Body = styled(BaseTypography)`
  font-size: 17;
  font-weight: ${prop => {
    if (prop.fontWeight == "bold") return 500
    if (prop.fontWeight == "thin") return 300
    return 400
  }};
  letter-spacing: -0.408;
`
export const Subhead = styled(BaseTypography)`
  font-size: 15;
  font-weight: ${prop => {
    if (prop.fontWeight == "bold") return 800
    if (prop.fontWeight == "thin") return 100
    return 400
  }};
  letter-spacing: -0.24;
`
export const Caption = styled(BaseTypography)`
  font-size: 13;
  font-weight: ${prop => {
    if (prop.fontWeight == "bold") return 600
    if (prop.fontWeight == "thin") return 200
    return 400
  }};
`
