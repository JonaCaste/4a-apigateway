const profesionalResolvers = {

    /* Microservicio Django */
        Query:{
            profesionalByUsername: async ( _, {id}, {dataSources}) => {
                return await dataSources.profesionalAPI.profesionalByUsernameRequest(id);
            }
        },

        Mutations:{
            createProfesional: async ( _, {profesionalData}, {dataSources}) => {
                return await dataSources.profesionalAPI.CreateProfesional(profesionalData);
            }
        }
    /*   */
}

module.exports = profesionalResolvers;