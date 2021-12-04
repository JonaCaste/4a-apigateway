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
        CitasById(id: Int!): Citas
        # por el momento no se utiliza
        Citas: [Cita]
    }

    type Mutation{
        CreateCita(data: CitaInput!): Cita
    }

`;

module.exports = citasTypeDefs;