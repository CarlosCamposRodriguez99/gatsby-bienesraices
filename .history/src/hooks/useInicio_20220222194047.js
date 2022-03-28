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
                  sharp: childImageSharp {
                    gatsbyImageData {
                      width: 1200px,
                      formats: [AUTO, WEBP, AVIF]
                    }
                  }
                }
              }
      }
    }
  `);
  return resultado;

}

export default useInicio;