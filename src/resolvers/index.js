const profesionalResolvers = require("./profesionalResolvers");
const clienteResolvers = require("./clienteResolvers");
const citaResolvers = require("./citaResolvers");

//libreria para unir resolvers
const lodash = require("lodash");

//unimos los resolvers
const resolvers = lodash.merge(profesionalResolvers, clienteResolvers, cita);

module.exports = resolvers;