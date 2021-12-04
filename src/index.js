const { ApolloServer } = require("apollo-server");

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ClienteAPI = require('./dataSources/clienteApi');
const ProfesionalAPI = require('./dataSources/profesionalApi');
consr CitaAPI = require("./dataSources/citaApi");
// const authentication = require("./utils/authentication");

const server = new ApolloServer({
    // context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        clienteAPI: new ClienteAPI(),
        profesionalAPI: new ProfesionalAPI(),
        citaAPI: new CitaAPI(),
    }),

    //config para iniciar el server
    introspection: true,
    playground: true
})


server.listen(process.env.PORT || 4000).then(({url})=>{
    console.log(`🚀 Server ready at ${url}`);
})