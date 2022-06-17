'use strict';
const {Model} = require('sequelize');
const { remove } = require('winston');
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
      this.hasMany(models.reservas, {
        foreingKey:'hotelId',
      });
    }
  }
  hoteles.init({
    hotelId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
 }, {
    sequelize,
    modelName: 'hoteles',
  });
  hoteles.removeAttribute('id');
  return hoteles;
};