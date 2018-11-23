

/**
 * Asistencias.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 module.exports = {
   tableName: 'asistencias',
     attributes: {
       updatedAt: false,
       createdAt: false,
       id_asi: { type: 'string', required: true, columnName: 'ASI_ID' },
       clase: { type: 'string', required: true, columnName: 'ASI_CLASE'},
       fecha: { type: 'string', required: true, columnName: 'ASI_FECHA' },
       runEstudiante: { type: 'string', required: true, columnName: 'ASI_RUN_ESTUDIANTE'},
     },
 };
