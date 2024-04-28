const {DataTypes} = require('sequelize')

const attibutes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  langague: {
    allowNull: false,
    type: DataTypes.STRING
  },
  age: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  picture: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataType} DataTypes 
 */
module.exports = (sequelize, _DataTypes) => {
  return sequelize.define(
    'users',
    attibutes,
    {
      tableName: 'users',
    }
  );
};
