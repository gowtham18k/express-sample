import db from "../models/index.js";
import { Op } from "sequelize";

const getCountry = async (search, skip, limit) => {
  let countryFilter = {
    where: {},
    offset: skip,
    limit: limit,
    order: [["id", "ASC"]],
  };
  if (search) {
    countryFilter.where.countryName = {
      [Op.like]: `%${search}%`,
    };
  }
  const [country, count] = await Promise.all([
    db.Country.findAll(countryFilter),
    db.Country.count({ where: countryFilter.where }),
  ]);
  return { success: true, code: 200, data: country, count: count };
};

export default { getCountry };
