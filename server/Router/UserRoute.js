const express = require("express");
const router = express.Router();
const user = require("../Models/UserData");

//get back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await user.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
//create a new post and add it
router.post("/", async (req, res) => {
  const post = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    bookedVehicle: req.body.bookedVehicle,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific post
router.get("/:id", async (req, res) => {
  try {
    const post = await user.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete selected post
router.delete("/:id", async (req, res) => {
  try {
    const removePost = await user.remove({ _id: req.params.id });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
