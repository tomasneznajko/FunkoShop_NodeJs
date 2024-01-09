const LicenceModel = require('../models/licence.model');

const getAllLicences = async () => {
  return await LicenceModel.getAll();
}

module.exports = {
  getAllLicences,
}