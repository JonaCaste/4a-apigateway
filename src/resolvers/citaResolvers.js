const citaResolvers = {

    /* Microservicio Spring */
        Query:{
            citaById: async ( _, {id}, {dataSources}) => {
                return await dataSources.citaAPI.citaByIdRequest(id);
            }
        },

        Mutations:{
            createCita: async ( _, {citaData}, {dataSources}) => {
                return await dataSources.citaAPI.CreateCita(citaData);
            }
        }
    /*   */
}

module.exports = citaResolvers;