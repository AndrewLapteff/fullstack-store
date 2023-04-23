const sequelize = require('../db')
const {  DataTypes, Model } = require('sequelize')

class User extends Model {}
User.init({  
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'USER'}
}, {sequelize, modelName: 'User'})

class Basket extends Model {}
Basket.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
}, {sequelize, modelName: 'Basket'})

class BasketDevice extends Model {}
BasketDevice.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
}, {sequelize, modelName: 'BasketDevice'})

class Device extends Model {}
Device.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: true},
  price: {type: DataTypes.INTEGER, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false}, // filename.png
  rating: {type: DataTypes.INTEGER, allowNull: false},
}, {sequelize, modelName: 'Device'})

class Type extends Model {}
Type.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
}, {sequelize, modelName: 'Type'})

class Brand extends Model {}
Brand.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
}, {sequelize, modelName: 'Brand'})

class Rating extends Model {}
Rating.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false}
}, {sequelize, modelName: 'Rating'})

class TypeBrand extends Model {}
TypeBrand.init({
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}, {sequelize, modelName: 'TypeBrand'})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand
}