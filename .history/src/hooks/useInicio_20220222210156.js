import { useStaticQuery, graphql } from 'gatsby';

const useInicio = () => {

  const resultado = useStaticQuery(graphql`
    query{
    imageSharp: file(relativePath: {eq: "destacada.jpg"}){
      childImageSharp{
        fluid(maxWidth: 1920){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  return resultado.allStrapiPaginas.nodes.map( inicio => ({ 
      inicio: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen

  }))

}

export default useInicio;