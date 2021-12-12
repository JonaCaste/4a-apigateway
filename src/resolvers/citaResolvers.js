const citaResolvers = {

    /* Microservicio Spring */
        Query:{
            citaByProfesional: async ( _, {profesionalId}, {dataSources}) => {
                return await dataSources.citaAPI.CitaByProfesional(profesionalId);
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