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
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
    `);

  return resultado;

}

export default useInicio;