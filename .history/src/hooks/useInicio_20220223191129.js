import { useStaticQuery, graphql } from 'gatsby';

const useInicio = () => {

  const resultado = useStaticQuery(graphql`
    query {
        allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
          nodes {
            id
            nombre
            contenido
            imagen {
              localFile {
                childImageSharp {
                  gatsbyImageData( width: 1200)
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
  }));

}

export default useInicio;