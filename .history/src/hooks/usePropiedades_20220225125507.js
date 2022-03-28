import { useStaticQuery, graphql } from 'gatsby';

const usePropiedades = () => {

  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          estacionamiento
          habitaciones
          categoria {
            nombre
          }  
          agente {
            nombre
            telefono
            email
          }
          imagen {
            localFile {
              
            }
          }
        }
      }
    }
  `);
  
  return datos.allStrapiPropiedades.nodes.map( propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    wc: propiedad.wc,
    id: propiedad.id,
    imagen: propiedad.imagen.localFile,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    agente: propiedad.agente,
    precio: propiedad.precio,
    categoria: propiedad.categoria,
  }));

}

export default usePropiedades;