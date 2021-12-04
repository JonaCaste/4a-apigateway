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
        Clientes: [Clientes]
        ClienteByUsername(id: Int!): Cliente
    }

    type Mutation{
        CreateCliente(data: ClienteInput!): Cliente
    }

`;

module.exports = clienteTypeDefs;