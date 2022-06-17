'use strict';
const {Model} = require('sequelize');
const hoteles = require('./hoteles');
module.exports = (sequelize, DataTypes) => {
  class hoteles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models,reservas, {
        foreingKey:'id',
      });
    }
  }
  hoteles.init({
    nombre: DataTypes.STRING,
 }, {
    sequelize,
    modelName: 'hoteles',
  });
  return hoteles;
};