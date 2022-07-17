const express = require("express");
const router = express.Router();
const vehicles = require("../Models/VehicleSchema");

//get back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await vehicles.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
//create a new post and add it
router.post("/", async (req, res) => {
  const vehicle = new vehicles({
    brand: req.body.brand,
    model: req.body.model,
    wheels: req.body.wheels,
  });
  try {
    const savedVehicle = await vehicle.save();
    res.json(savedVehicle);
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

//get specific post
router.get("/:id", async (req, res) => {
  try {
    const post = await vehicles.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete selected post
router.delete("/:id", async (req, res) => {
  try {
    const removePost = await vehicles.remove({ _id: req.params.id });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
