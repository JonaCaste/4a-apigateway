const fetch = require("node-fetch");
const serverConfig = require("../server");
const { ApolloError } = require('apollo-server');

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    if(token == ''){
        return { usernameToken: null}
    }
    else{
        try{
            let requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json" , 
                    "Authorization": "token " + token
                },
                redirect: "follow"
            }

            let response = await fetch(`${serverConfig.djangoApiUrl}profesional/users/`, requestOptions);
            if(response.status != 200){
                console.log(response.json())
                throw new ApolloError("Token invalido", 401);
            }

            return { usernameToken: (await response.json()).username};
        }
        catch(error){
            console.log(error);
            throw new ApolloError("Error inesperado", 500);
        }
    }
}

module.exports = authentication;