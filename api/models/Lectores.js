module.exports = {

    tableName: 'LECTOR',
      attributes: {
        updatedAt: false,
        createdAt: false,
        id_lec: { type: 'string', required: true, unique: true, columnName: 'LEC_ID'},
        ip: { type: 'string', required: true, columnName: 'LEC_IP'},
        facultad: { type: 'string', required: true, columnName: 'LEC_FACULTAD' },
        sala: { type: 'number', required: true, type: 'integer', columnName: 'LEC_SALA'},
        estado: {type: 'string', required: false, columnName: 'LEC_ESTADO'},
      },
       // connection:'mongodb'
};
