const clienteTypeDefs = require('./clienteTypeDefs');
const profesionaltypeDefs = require('./profesionalTypeDefs');

//unimos los typeDefs para devolver un arreglo
const schemasArray = [clienteTypeDefs, profesionaltypeDefs];

module.exports = schemasArray;