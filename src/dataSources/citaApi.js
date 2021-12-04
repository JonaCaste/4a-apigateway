const serverConfig = require("../server");

//super clase para conectarnos a servicios rest
const {RESTDataSource} = require("apollo-datasource-rest");

class CitaApi extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.springApiUrl;
    }

    /*   Microservico Spring   */

        /* Cliente */
            async CitaByIdRequest(id){
                return await this.get(`/citasUsuario/${id}`);
            }

            async CreateCita(citaData){
                return await this.post("/citas/", citaData)
            }
        /*    */

    /*     */

}

module.exports = CitaApi;