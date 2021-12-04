const clienteResolvers = {

    /* Microservicio Django */
        Query:{
            clienteById: async ( _, {id}, {dataSources}) => {
                return await dataSources.profesionalAPI.clienteByIdRequest(id);
            }
        },

        Mutation:{
            createCliente: async ( _, {clienteData}, {dataSources}) => {
                return await dataSources.profesionalAPI.CreateCliente(clienteData);
            }
        }
    /*   */
}

module.exports = clienteResolvers;