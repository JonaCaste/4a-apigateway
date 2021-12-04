const profesionalResolvers = require("./profesionalResolvers");
const clienteResolvers = require("./clienteResolvers");

//libreria para unir resolvers
const lodash = require("lodash");

//unimos los resolvers
const resolvers = lodash.merge(profesionalResolvers, clienteResolvers);

module.exports = resolvers;