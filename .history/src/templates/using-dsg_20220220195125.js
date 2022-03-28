import * as React from "react"
import { Link } from "gatsby"



const UsingDSG = () => (
  <Layout>
    <h1>Hello from a DSG Page</h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
  </Layout>
)

export default UsingDSG
