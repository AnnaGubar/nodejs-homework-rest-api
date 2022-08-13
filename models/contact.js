const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const contactSchema = new Schema(
  {
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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().allow(null, "").min(3).max(30).required(),
  email: Joi.string().pattern(emailRegexp),
  phone: Joi.string().pattern(/([0-9]{3}) [0-9]{3}-[0-9]{4}/),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  addSchema,
  updateFavoriteSchema,
};
