import { useStaticQuery, graphql } from 'gatsby';

const useInicio = () => {

  const resultado = useStaticQuery(graphql``)
    

  return resultado.allStrapiPaginas.nodes.map( inicio => ({ 
      inicio: inicio.nombre,
      contenido: inicio.contenido,
      imagen: inicio.imagen

  }))

}

export default useInicio;