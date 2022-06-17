'use strict';
const {Model} = require('sequelize');
const clientes = require('./clientes');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reservas, {
        foreingKey:'dni',
      });
    }
  }
  clientes.init({
    dni:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    nombre: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clientes',
  });
  clientes.removeAttribute('id');
  return clientes;
};