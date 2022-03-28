import * as React from "react"

const UsingDSG = () => (
  <div> //este div es un Layout 
    <h1>Hello from a DSG Page</h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
  </div> //este div = Layout
)

export default UsingDSG
