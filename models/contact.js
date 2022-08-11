const { Schema, model } = require("mongoose");
const Joi = require("joi"); 

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set some name for the contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
}, {versionKey: false, timestamps: true});

const addSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  phone: Joi.string().pattern(/([0-9]{3}) [0-9]{3}-[0-9]{4}/),
  favorite: Joi.boolean(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  addSchema
}