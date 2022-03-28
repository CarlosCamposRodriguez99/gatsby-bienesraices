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
                    gatsbyImageData(width: 1200px, placeholder: BLURRED
                    formats: [AUTO, WEBP )
                  }
                }
              }
      }
    }
  `);
  return resultado;

}

export default useInicio;