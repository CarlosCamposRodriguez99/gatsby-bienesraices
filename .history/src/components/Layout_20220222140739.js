import React from 'react'
import Helmet from 'react-helmet'

const Layout = ({children}) => {
  return (
    <>
        <Helmet>
          <title>Bienes Raices Gatsby</title>


        </Helmet>
        {children}
    
    
    </>
  )
}

export default Layout
