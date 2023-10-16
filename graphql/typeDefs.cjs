module.exports = `
type Pregunta {
    id_pregunta: Int
    nombre_pregunta: String!
    tema: String!
    opciones: [OpcionPregunta]
}

type OpcionPregunta {
    id_opcion_pregunta: Int!
    nombre_opcion: String!
    correcta: Boolean
}

input PreguntaInput {
    nombre_pregunta: String!
    tema: String!
    opciones: [OpcionPreguntaInput]
}

input OpcionPreguntaInput {
    nombre_opcion: String!
    correcta: Boolean!
}

type PreguntaResponse {
    success: Boolean!
    message: String!
    id_pregunta: Int!
}

type Query {
    preguntas: [Pregunta]
}

type Mutation {
    crearPreguntaSimple(nombre_pregunta: String!, tema:String!): PreguntaResponse
    crearPregunta(pregunta: PreguntaInput!): PreguntaResponse
}
`;