const express = require("express");
const studentRoutes = express.Router();
const { Student, Course } = require("./db");

studentRoutes.get("/", async (req, res, next) => {
  try {
    await Student.findAll({
      include: [
        {
          model: Course
        }
      ]
    }).then(docs => {
      const response = {
        count: docs.length,
        students: docs
      };
      res.json(response);
    });
  } catch (error) {
    console.log(error);
  }
});

studentRoutes.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    Student.findByPk(id).then(data => {
      console.log(data);
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

studentRoutes.put("/:id", async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  try {
    await Student.update(update, { where: { id } }).then(data => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

studentRoutes.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    Student.destroy({ where: { id } }).then(data => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

studentRoutes.post("/", async (req, res, next) => {
  try {
    const logs = new Student(req.body);
    const entry = await logs.save();
    res.json(entry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = studentRoutes;
