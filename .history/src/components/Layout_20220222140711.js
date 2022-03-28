import React from 'react'
import Helmet from 'react-helmet'

const Layout = ({children}) => {
  return (
    <>
        <Helmet>
          <tilte>Bienes Raices Gatsby</tilte>


        </Helmet>
        {children}
    
    
    </>
  )
}

export default Layout
