import { useStaticQuery, graphql } from 'gatsby';

const useInicio = () => {

  const data = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { nombre: { eq: "Inicio" }}) {
        nodes {
          id
          nombre
          contenido
          imagen {
            localFile {
              sharp: childImageSharp {
                fluid(quality: 90, maxWidth: 1800 duotone: {
                  highlight: "#222222", shadow: "#192550", opacity: 30
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
  return data.allStrapiPaginas.nodes.map( inicio => ({ 
      nombre: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen.localFile
  }))

}

export default useInicio;