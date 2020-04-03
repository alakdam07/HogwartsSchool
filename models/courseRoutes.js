const express = require("express");
const courseRoutes = express.Router();
const { Course } = require("./db");
courseRoutes.get("/", async (req, res, next) => {
  try {
    await Course.findAll().then(docs => {
      const response = {
        count: docs.length,
        courses: docs
      };
      res.json(response);
    });
  } catch (error) {
    console.log(error);
  }
});

courseRoutes.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    Course.findByPk(id).then(data => {
      console.log(data);
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

courseRoutes.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const update = req.body;
  try {
    await Course.update(update, { where: { id } }).then(data => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

courseRoutes.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    Course.destroy({ where: { id } }).then(data => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

courseRoutes.post("/", async (req, res, next) => {
  try {
    const model = await Course.create(req.body);
    const entry = await model.save();
    res.json(entry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = courseRoutes;
