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
            async CitaByProfesional(profesionalId){
                return await this.get(`/citas/${profesionalId}`);
            }

            async CreateCita(citaData){
                return await this.post("/cita", citaData);
            }
        /*    */

    /*     */

}

module.exports = CitaApi;