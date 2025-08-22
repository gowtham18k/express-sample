import { DataTypes } from "sequelize";
import sequelize from "../configs/database.js";

const Country = sequelize.define("Country", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  countryName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countryCode: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  countryIsoCode: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, {
  tableName: "country"
});

export default Country;