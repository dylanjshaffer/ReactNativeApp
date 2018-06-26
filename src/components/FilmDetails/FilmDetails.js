import React, { Component, Fragment } from "react"
import { ScrollView } from "react-native"
import styled from "styled-components/native"
import { Subhead, Caption } from "ReactNativeApp/src/components"

const Container = styled(ScrollView)`
  flex: 1;
  padding: 15px;
`
export class FilmDetails extends Component {
  render() {
    const { overview, budget, revenue, status } = this.props
    return (
      <Container>
        <Detail label="Overview" content={overview} />
        <Detail label="Status" content={status} />
        {/* <Detail label="Budget" content={budget}/>
        <Detail label="Revenue" content={revenue}/> */}
      </Container>
    )
  }
}

const Detail = ({ label, content }) => {
  return (
    <Fragment>
      <Subhead fontWeight="bold" content={label} />
      <Caption fontWeight="thin" content={content} style={{ marginTop: 5, marginBottom: 20 }} />
    </Fragment>
  )
}
