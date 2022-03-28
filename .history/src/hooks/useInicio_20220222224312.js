import { useStaticQuery, graphql } from 'gatsby';

const useInicio = () => {

  const { imageSharp } = useStaticQuery(graphql`
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
  return imageSharp.allStrapiPaginas.nodes.map( inicio => ({ 
      nombre: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen
  }))

}

export default useInicio;