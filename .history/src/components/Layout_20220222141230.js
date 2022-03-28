import React from 'react'
import Helmet from 'react-helmet'

const Layout = ({children}) => {
  return (
    <>
        <Helmet>
          <title>Bienes Raices Gatsby</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          


        </Helmet>
        {children}
    
    
    </>
  )
}

export default Layout
