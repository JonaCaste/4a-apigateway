const {gql} = require("apollo-server");

const clienteTypeDefs = gql`

    # Microservicio DJANGO
    input ClienteInput{
        tipoDocumento: String!
        numeroDocumento: Int!
        nombre: String!
        sexo: String
        edad:  Int
    }

    type Cliente{
        id: Int
        tipoDocumento: String
        numeroDocumento: Int
        nombre: String
        sexo: String
        edad:  Int
    }

    type Query{
        ClienteById(id: Int!): Cliente
        # por el momento no se utiliza
        Clientes: [Clientes]
    }

    type Mutation{
        CreateCliente(data: ClienteInput!): Cliente
    }

`;

module.exports = clienteTypeDefs;