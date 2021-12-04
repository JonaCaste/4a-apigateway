const serverConfig = require("../server");

//super clase para conectarnos a servicios rest
const {RESTDataSource} = require("apollo-datasource-rest");

class ProfesionalApi extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.djangoApiUrl;
    }

    /*   Microservico Django   */

        /* Profesional */
            async ProfesionalByIdRequest(id){
                return await this.get(`/profesional/persona-profesional/${id}/`);
            }

            async CreateProfesional(profesionalData){
                return await this.post("/profesional/persona-profesional/", profesionalData)
            }
        /*    */
        
    /*     */

}

module.exports = ProfesionalApi;