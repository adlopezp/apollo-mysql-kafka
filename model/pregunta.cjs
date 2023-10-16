const { knex } = require('../db/connection.cjs');
const n = require('nested-knex');

const selectFunction = async function getPreguntas() {
  let result = [];
  await n.array(
    n.type({
      id_pregunta: n.number('pregunta.id_pregunta', { id: true }),
      nombre_pregunta: n.string('pregunta.nombre_pregunta'),
      temas: n.string('pregunta.tema'),
      opciones: n.array(
        n.type({
          id_opcion_pregunta: n.number('opcion_pregunta.id_opcion_pregunta', { id: true }),
          nombre_opcion: n.string('opcion_pregunta.nombre_opcion'),
          correcta: n.boolean('opcion_pregunta.correcta'),
        })
      )
    }),
  )
    .withQuery(
      knex.from('pregunta')
        .leftJoin('opcion_pregunta', 'pregunta.id_pregunta', 'opcion_pregunta.id_pregunta')
        .select(),
    )
    .then(records => {
      result = records;
    });
  return result;
};

module.exports.select = selectFunction;

const insertFunctionSimple = async function insertPreguntaSimple(nombrePregunta, nombreTema) {
  let result;
  await knex.from('pregunta').insert({ nombre_pregunta: nombrePregunta, tema: nombreTema }).then(row => { result = row[0] });
  return result;
};

module.exports.insertSimple = insertFunctionSimple;

const insertFunction = async function insertPregunta(preguntaInput) {
  let idPregunta;
  await knex.from('pregunta')
    .insert(
      {
        nombre_pregunta: preguntaInput.pregunta.nombre_pregunta,
        tema: preguntaInput.pregunta.tema
      })
    .then(row => { idPregunta = row[0] });

  for (const opcion of preguntaInput.pregunta.opciones) {
    await knex.from('opcion_pregunta')
      .insert(
        {
          id_pregunta: idPregunta,
          nombre_opcion: opcion.nombre_opcion,
          correcta: opcion.correcta
        });
  }
  return idPregunta;
};

module.exports.insert = insertFunction;