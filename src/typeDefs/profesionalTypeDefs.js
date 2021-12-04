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
        profesionalById(id: Int!): Profesional
        # por el momento no se utiliza
        Profesionales: [Profesional]
    }

    type Mutation{
        createProfesional(data: ProfesionalInput!): Profesional
    }

`;

module.exports = profesionalTypeDefs;

