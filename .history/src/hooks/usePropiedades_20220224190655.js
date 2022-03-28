import { useStaticQuery, graphql } from 'gatsby';

const usePropiedades = () => {

  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categoria {
            nombre
      }
      agente {
        nombre
        telefono
        email
      }
      
    }
    
  }
}
  
  `);

  return ( 
    <h1>use</h1>
  );
}

export default usePropiedades;