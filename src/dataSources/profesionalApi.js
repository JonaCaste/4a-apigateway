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
            async ProfesionalById(id){
                return await this.get(`/profesional/user/${id}/`);
            }

            async Profesionales(){
                return await this.get(`/profesional/user-list/`);
            }

            async LoginProfesional(userProfesionalData){
                return await this.post("/rest-auth/login/", userProfesionalData);
            }

            async CreateProfesional(profesionalData){
                return await this.post("/profesional/create-profesional/", profesionalData);
            }
        /*    */
        
    /*     */

}

module.exports = ProfesionalApi;