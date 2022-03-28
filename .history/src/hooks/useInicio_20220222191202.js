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
                    fluid(maxWidth: 1200px) {
                      ...GatsbyImageSharpFluid_withWebp
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