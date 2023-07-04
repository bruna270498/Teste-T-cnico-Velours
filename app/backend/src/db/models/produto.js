'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index');

class Produto extends Model {}

Produto.init(
{
name: {
type: DataTypes.STRING,
allowNull: false
},
price: {
type: DataTypes.FLOAT,
allowNull: false
},
description: {
type: DataTypes.STRING
},
image: {
type: DataTypes.STRING
},
tipo: {
type: DataTypes.STRING,
allowNull: false
}
},
{
sequelize,
modelName: 'Produto'
}
);

module.exports = Produto;

