const {gql} = require("apollo-server");

const profesionalTypeDefs = gql`

    # Microservicio DJANGO

    input ProfesionalLogin{
        username: String!
        password: String!
    }

    input ProfesionalSignup{
        username: String!
        password: String!
        tipoDocumento: String!
        numeroDocumento: Int!
        perfil: String
    }

    type Profesional{
        id: Int
        tipoDocumento: String
        numeroDocumento: Int
        perfil: String
        user: Int
    }

    type UserProfesional{
        id: Int
        username: String
        email: String
        profesional: Profesional
    }

    type Token{
        key: String!
    }

    type Query{
        profesionalById(id: Int!): UserProfesional
        profesionales: [UserProfesional]
    }

    type Mutation{
        createProfesional(profesionalData: ProfesionalSignup!): Token!
        loginProfesional(profesionalLogin: ProfesionalLogin!): Token!
    }

`;

module.exports = profesionalTypeDefs;

