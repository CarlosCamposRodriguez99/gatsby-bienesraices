import { useStaticQuery, graphql } from 'gatsby';

const useInicio = () => {

  const resultado = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { nombre: { eq: "Inicio" }}) {
        nodes {
          id
          nombre
          contenido
          imagen {
            localFile {
              sharp: childImageSharp {
                fluid(maxWidth: 1200 duotone: {
                  
                }) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
`);
  return resultado.allStrapiPaginas.nodes.map( inicio => ({ 
      nombre: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen
  }))

}

export default useInicio;