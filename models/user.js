'use strict';
const moment = require('moment')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static async create (values, options) {
      try {
        return Promise.resolve(await super.create({
          ...values,
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
          updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }, options))
      } catch (e) {
        return Promise.reject(new Error(`User create error: ${e}`))
      }
    }
    async update (values, options) {
      try {
        return Promise.resolve(await super.update({
          ...values,
          updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }, options))
      } catch (e) {
        return Promise.reject(new Error(`User update error: ${e}`))
      }
    }
  };
  User.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    login: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    options: {
      allowNull: true,
      type:  DataTypes.JSON
    },
    createdAt: DataTypes.STRING(19),
    updatedAt: DataTypes.STRING(19)
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};