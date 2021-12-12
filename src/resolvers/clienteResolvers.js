const clienteResolvers = {

    /* Microservicio Django */
        Query:{
            clienteById: async ( _, {id}, {dataSources}) => {
                return await dataSources.clienteAPI.ClienteById(id);
            },

            clientes: async ( _, {}, {dataSources}) => {
                return await dataSources.clienteAPI.Clientes();
            }
        },

        Mutation:{
            createCliente: async ( _, {clienteData}, {dataSources}) => {
                return await dataSources.clienteAPI.CreateCliente(clienteData);
            }
        }
    /*   */
}

module.exports = clienteResolvers;