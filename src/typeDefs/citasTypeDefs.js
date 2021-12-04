const {gql} = require("apollo-server");

const citasTypeDefs = gql`

    # Microservicio Spring
    input CitaInput{
        id: String
        pacienteId: String
        profesionalId: String
    }

    type Cita{
        id: String
        #revisar, por que deberia ser int, (en las pruebas es string)
        pacienteId: String
        profesionalId: String
        nombre: String
        sexo: String
        edad:  Int
    }

    type Query{
        citaById(id: Int!): Cita
        # por el momento no se utiliza
        Citas: [Cita]
    }

    type Mutation{
        createCita(data: CitaInput!): Cita
    }

`;

module.exports = citasTypeDefs;