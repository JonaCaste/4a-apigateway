const {gql} = require("apollo-server");

const citasTypeDefs = gql`

    # Microservicio Spring
    input CitaInput{
        idCita: String!
        pacienteId: String!
        profesionalId: String!
        fecha: String
        especialidad: String
    }

    type Cita{
        idCita: String!
        pacienteId: String!
        profesionalId: String!
        fecha: String
        especialidad: String
    }

    type Query{
        citaByProfesional(profesionalId: String!): [Cita]
        #citas: [Cita]
    }

    type Mutation{
        createCita(citaData: CitaInput!): Cita
    }

`;

module.exports = citasTypeDefs;