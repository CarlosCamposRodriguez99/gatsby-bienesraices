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
              url {
                childImageSharp {
                  gatsbyImageData(width: 1200px)
                }
              }
            }
          }
      }
    }
  `);

  return resultado.allStrapiPaginas.nodes.map( inicio => ({ 
      inicio: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen

  }))

}

export default useInicio;