/**
* Clases.js
*
* @description :: A model definition.  Represents a database table/collection/etc.
* @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {
tableName: 'CLASES',
  attributes: {
    updatedAt: false,
    createdAt: false,
    id_cla: { type: 'string', required: true, unique: true, columnName: 'CLA_ID'},
    id_lec: { type: 'string', required: true,  columnName: 'CLA_LEC_ID' },
    fecha: { type: 'string', required: true, columnName: 'CLA_FECHA'},
    runAcademico: { type: 'string', required: true, columnName: 'CLA_RUN_ACADEMICO'},
    horaInicio: { type: 'string', required: true, columnName: 'CLA_HORA_INICIO'},
    horaTermino: { type: 'string', required: true, columnName:'CLA_HORA_TERMINO'},
  },
   // connection:'mongodb'
};
