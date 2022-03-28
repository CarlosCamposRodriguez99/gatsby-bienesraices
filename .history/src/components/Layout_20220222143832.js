import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';

const Layout = ({children}) => {
  return (
    <>  
        <Global
            styles={css`
                html {
                  font-size: 62.5%;
                  box-box-sizing
                }
            `}
        
        />
        <Helmet>
          <title>Bienes Raices Gatsby</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;1,400&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />


        </Helmet>
        {children}
    
    
    </>
  )
}

export default Layout
