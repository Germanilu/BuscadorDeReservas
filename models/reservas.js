'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservas extends Model {
    static associate(models) {
      reservas.belongsTo(models.clientes,{
        foreingKey:'dni',
      })
    }
    static associate(models) {
      reservas.belongsTo(models.hoteles,{
        foreingKey:'hotelId',
      })
    };
  }
  reservas.init({
    importe: DataTypes.INTEGER,
    fechaEntrada: DataTypes.DATE,
    fechaSalida: DataTypes.DATE,
    hotelId: DataTypes.INTEGER
    
 }, {
    sequelize,
    modelName: 'reservas',
  });
  return reservas;
};