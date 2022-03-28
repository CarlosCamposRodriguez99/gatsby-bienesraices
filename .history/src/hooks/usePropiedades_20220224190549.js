import { useStaticQuery, graphql } from 'gatsby';

const usePropiedades = () => {

  const datos = useStaticQuery(graphql`
  
  
  `);

  return ( 
    <h1>use</h1>
   );
}

export default usePropiedades;