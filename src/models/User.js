const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const { password } = require("../../config/database");

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
  }
  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "user_id", as: "address" });
    this.belongsToMany(models.Course, {
      foreignKey: "user_id",
      through: "user_courses",
      as: "courses",
    });
  }
}
