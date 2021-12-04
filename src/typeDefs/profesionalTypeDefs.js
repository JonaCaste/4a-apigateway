const {gql} = require("apollo-server");

const profesionalTypeDefs = gql`

    # Microservicio DJANGO
    input ProfesionalInput{
        tipoDocumento: String!
        numeroDocumento: Int!
        nombre: String!
        perfil: String
    }

    type Profesional{
        id: Int
        tipoDocumento: String
        numeroDocumento: Int
        nombre: String
        perfil: String
    }

    type Query{
        Profesionales: [Profesionales]
        ProfesionalByUsername(id: Int!): Profesional
    }

    type Mutation{
        CreateProfesional(data: ProfesionalInput!): Profesional
    }

`;

module.exports = profesionalTypeDefs;

