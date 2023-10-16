const Pregunta = require('../model/pregunta.cjs');
const Topic = require('../kafka/topic.cjs');

module.exports = {
    Query: {
        preguntas: () => Pregunta.select(),
    },
    Mutation: {
        crearPreguntaSimple: (_, { nombre_pregunta, tema }) => {
            let idPregunta = Pregunta.insertSimple(nombre_pregunta, tema);
            Topic.produceMessage({nombre_pregunta: nombre_pregunta, tema: tema});
            return {
                success: true,
                message: 'Pregunta simple creada correctamente',
                id_pregunta: idPregunta
            };
        },
        crearPregunta: (_,preguntaInput) => {
            let idPregunta = Pregunta.insert(preguntaInput);
            Topic.produceMessage(preguntaInput.pregunta);

            return {
                success: true,
                message: 'Pregunta completa creada correctamente',
                id_pregunta: idPregunta
            };
        },
    }
};