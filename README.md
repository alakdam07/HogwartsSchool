# Hogwarts School

<div style="text-align:center">
<img
    height="80"
    width="90"
    alt="goat"
   src="https://res.cloudinary.com/dtnhtcwwg/image/upload/v1585561450/Harry-Potter-Gryffindor-Crest-drawing_cjvx4d.jpg"
  />
</div>

## Description of the app: User can create, read, update and delete the student. Also user can create new course and can able to enroll the student.

- **Can:** User can create, read, update and delete the student.
- **Cannot:** User cannot put duplicate phone, email and id.

**Tachnology:**

- **Backend:** Node js, Express server, Helmet, Morgan, Cors.
- **Database:** PostgreSQL and sequelize ORM for connection and models' creation.
- **API:** REST API.
- **Frontend:** React js, React-router-dom.
- **Designing:** Materializecss

## Backlogs

- [x] Setup Backend
  - [x] Install dependencies
  - [x] Setup Express server
  - [x] Sequelize setup
  - [x] Create two models
  - [x] Make relationship with models
  - [x] Prevent dubplicate student name by using sequelize's `unique: true`
  - [x] REST API setup
  - [x] CRUD test by using [Postman](https://www.postman.com/)
  - [x] Setup concurrently for the run frontend and backend together
- [x] Setup Frontend
  - [x] Create React-app
  - [x] Install dependencies
  - [x] Use hooks
  - [x] React-router-dom setup
  - [x] Proxy setting
  - [x] Fetch data
  - [x] Shows data to the browser
  - [x] Add datatable
  - [x] Implement delete data button
  - [x] Implement edit data button
  - [x] Styling
  - [x] Error handaling
  - [x] Build production
- [x] Deployment
  - [x] Create Herokua app
  - [x] Add Heroku addons
  - [x] Deployment complete

### Intruction to setup sequelize:

**Instruction to setup [sequelize](https://sequelize.org/v3/)**

### Usage

```sh
$ npm install

$ cd client & npm install

```

- **Start the app:** `npm run dev`
- **Start backend:** `nodemon server`
- **Start frontend:** cd client & `npm start`

## Project live demo: [Hogwarts School](https://www.youtube.com/watch?v=Cv3qyYJjgJ4)

## Copyright

Owned by [Alak Dam](http://www.alakdam.com/)

## Tech information 

| Tech        | Version |
| ----------- | ------- |
| React       | 16.13.0 |
| Node        | 13.3.0  |
| Express     | 4.17.1  |
| axios       | 0.19.2  |
| sequelize   | 5.21.5  |
| materialize | 3.7.1   |

### License

This project is licensed under the MIT License

Picture and logo collected from [pexels](https://www.pexels.com/)
