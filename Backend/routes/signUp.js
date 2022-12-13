const express = require("express");
const Joi = require("joi");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).require(),
    email: Joi.string().min(3).max(200).email().required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //validating if user with a particular email already exits
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send("User with that email already exists...");

    const { name, email, password } = req.body;

    user = new User({
      name,
      email,
      password,
    });

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    await bcrypt.hash(user.password, salt);

    //saving to the database
    await user.save();
    res.send("User Created");
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

//Exporting our mini-app module

module.exports = router;
