const sequelize = require("sequelize");

var con = new sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const Student = con.define("student", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  birthday: {
    type: sequelize.DATEONLY,
    allowNull: false
  },
  address: {
    type: sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  city: {
    type: sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true
  },

  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

const Course = con.define("course", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: sequelize.STRING },
  startdate: { type: sequelize.DATEONLY },
  enddate: { type: sequelize.DATEONLY },
  studentId: { type: sequelize.INTEGER, foreignKey: true }
});

Student.hasMany(Course);
Course.belongsTo(Student);

//con.sync({ force: true });

module.exports = {
  Student,
  Course
};
