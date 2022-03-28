import { useStaticQuery, graphql } from 'gatsby';

const useInicio = () => {

  const resultado = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { nombre: { eq: "Inicio" }}) {
        nodes {
          nombre
          contenido
          imagen {
            localFile {
              sharp: childImageSharp {
                fluid(maxWidth: 1800 duotone: {
                  highlight: "#222222", shadow: "#192550", opacity: "30
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
      imagen: inicio.imagen.localFile
  }))

}

export default useInicio;