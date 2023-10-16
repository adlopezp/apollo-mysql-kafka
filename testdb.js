import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pregunta  = require('./model/pregunta.cjs');



/*async function getPreguntas() {
    const result = await knex.select().from('pregunta');
    return result;
}

async function getPreguntas() {
    let result = [];
    await n.array(
        n.type({
          id: n.number('pregunta.id_pregunta', { id: true }), 
          nombre: n.string('pregunta.nombre_pregunta'),
          temas: n.string('pregunta.tema'),
          opciones: n.type({
            id: n.number('opcion_pregunta.id_opcion_pregunta', { id: true }),
            nombre: n.string('opcion_pregunta.nombre_opcion'),
            correcta: n.boolean('opcion_pregunta.correcta'),
          })
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
}*/

(
    async() => {
        const preguntas = await pregunta.select();
        console.log(preguntas);
    }
)();