const serverConfig = require("../server");

//super clase para conectarnos a servicios rest
const {RESTDataSource} = require("apollo-datasource-rest");

class ClienteApi extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.djangoApiUrl;
    }

    /*   Microservico Django   */

        /* Cliente */
            async ClienteByIdRequest(id){
                return await this.get(`/cliente/persona-cliente/${id}/`);
            }

            async CreateCliente(clienteData){
                return await this.post("/cliente/persona-cliente/", clienteData)
            }
        /*    */

    /*     */

}

module.exports = ClienteApi;