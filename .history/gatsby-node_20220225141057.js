exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    https://prod.liveshare.vsengsaas.visualstudio.com/join?8D415F72E1650EF129956937D4EE882463E3
  `)
}
