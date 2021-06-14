import React, { useEffect, useLayoutEffect } from "react"
import { connect, styled } from "frontity"
import List from "../list";

const Events = ({ state, actions, libraries }) => {

  return (
    <div>
      <H1>Events component with archive list below</H1>
      <hr />
      <List />
    </div>
  )

}

const H1 = styled.h1`
  background: red;
`

export default connect(Events)