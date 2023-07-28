const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true },
    countrycode: { type: String, required: true },
    phoneNo: { type: String, required: true },
    message: { type: String, required: true },
  });

  module.exports = mongoose.model("Contact", contactSchema);