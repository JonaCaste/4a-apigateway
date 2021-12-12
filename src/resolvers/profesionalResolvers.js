const profesionalResolvers = {

    /* Microservicio Django */
        Query:{

            profesionalById: async ( _, {id}, {dataSources}) => {
                    return await dataSources.profesionalAPI.ProfesionalById(id);
            },

            profesionales: async ( _, {}, {dataSources}) => {
                return await dataSources.profesionalAPI.Profesionales();
            }
        },

        Mutation:{
            createProfesional: async ( _, {profesionalData}, {dataSources}) => {
                return await dataSources.profesionalAPI.CreateProfesional(profesionalData);
            },

            loginProfesional: async ( _, {profesionalLogin}, {dataSources}) => {
                return await dataSources.profesionalAPI.LoginProfesional(profesionalLogin);
            }
        }
    /*   */
}

module.exports = profesionalResolvers;