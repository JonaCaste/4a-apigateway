const citaResolvers = {

    /* Microservicio Spring */
        Query:{
            citaById: async ( _, {id}, {dataSources}) => {
                return await dataSources.citaAPI.citaByIdRequest(id);
            }
        },

        Mutation:{
            createCita: async ( _, {citaData}, {dataSources}) => {
                return await dataSources.citaAPI.CreateCita(citaData);
            }
        }
    /*   */
}

module.exports = citaResolvers;