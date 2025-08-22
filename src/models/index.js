import sequelize from "../configs/database.js"
import Country from "./country.js";

// Init models
const db = {};
db.sequelize = sequelize;
db.Country = Country;

export default db;