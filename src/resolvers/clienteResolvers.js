const clienteResolvers = {

    /* Microservicio Django */
        Query:{
            clienteByUsername: async ( _, {id}, {dataSources}) => {
                return await dataSources.profesionalAPI.clienteByUsernameRequest(id);
            }
        },

        Mutations:{
            createCliente: async ( _, {clienteData}, {dataSources}) => {
                return await dataSources.profesionalAPI.CreateCliente(clienteData);
            }
        }
    /*   */
}

module.exports = clienteResolvers;