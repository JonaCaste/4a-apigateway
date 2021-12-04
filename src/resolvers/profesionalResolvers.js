const profesionalResolvers = {

    /* Microservicio Django */
        Query:{
            profesionalById: async ( _, {id}, {dataSources}) => {
                return await dataSources.profesionalAPI.profesionalByIdRequest(id);
            }
        },

        Mutation:{
            createProfesional: async ( _, {profesionalData}, {dataSources}) => {
                return await dataSources.profesionalAPI.CreateProfesional(profesionalData);
            }
        }
    /*   */
}

module.exports = profesionalResolvers;