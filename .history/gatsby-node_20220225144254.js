exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `);

  //console.log(JSON.stringify(resultado.data.allStrapiPropiedades));
  
  // Si no hay resultados 
  if(resultado.errors) {
    reporter.panic('No hay resultados', resultado.errors);
  }

  // S
}
