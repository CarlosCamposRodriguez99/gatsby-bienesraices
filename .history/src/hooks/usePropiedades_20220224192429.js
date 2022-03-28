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
          imagen {
            localFile {
              sharp: childImageSharp {
                fluid(maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);
  
  return datos.allStrapiPropiedades.nodes.map( propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    wc: propiedad.wc,
    id: propiedad.id,
    imagen: propiedad.imagen.localFile,
    nombre: propiedad.nombre,
    nombre: propiedad.nombre,
    nombre: propiedad.nombre,
    nombre: propiedad.nombre,
    nombre: propiedad.nombre,
    nombre: propiedad.nombre,


  }));

}

export default usePropiedades;