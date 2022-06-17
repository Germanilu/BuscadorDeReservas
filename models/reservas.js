'use strict';
const {Model} = require('sequelize');
const reservas = require('./reservas');
module.exports = (sequelize, DataTypes) => {
  class reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models,clientes,{
        foreingKey:'dni',
      });
      this.belongsTo(models,hoteles,{
        foreingKey:'hotelId',
      });
    }
  }
  reservas.init({

    importe: DataTypes.INTEGER,
    fechaEntrada: DataTypes.DATE,
    fechaSalida: DataTypes.DATE,
    dni: DataTypes.STRING,
    hotelId: DataTypes.INTEGER
    
 }, {
    sequelize,
    modelName: 'reservas',
  });
  return reservas;
};