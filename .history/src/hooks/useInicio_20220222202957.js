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
              ...gatsbyImageData
            }
          }
      }
    }
  `);

  return resultado.allStrapiPaginas.nodes.map( inicio => () )

}

export default useInicio;