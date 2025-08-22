import countryService from "../services/country.js";

const getAllCountry = async (req, res, next) => {
  try {
    let search = req.query.search || null;
    let skip = req.query.skip ? Number(req.query.skip) : 0;
    let limit = req.query.limit ? Number(req.query.limit) : 0;
    const country = await countryService.getCountry(search, skip, limit);
    res.json(country);
  } catch (err) {
    next(err);
  }
};

export default { getAllCountry };