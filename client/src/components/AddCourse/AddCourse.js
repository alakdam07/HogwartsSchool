import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const AddCourse = () => {
  const [state, setState] = useState({
    name: "",
    startdate: "",
    enddate: "",
    studentId: ""
  });
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState({ student: [] });
  const addCourse = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  useEffect(() => {
    getStudent();
  }, []);
  const getStudent = () => {
    axios
      .get("/students")
      .then(response => {
        setStudents({ student: response.data.students });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const HandleClick = () => {
    Swal.fire({
      title: "Enrollment success"
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const obj = {
      name: state.name,
      startdate: state.startdate,
      enddate: state.enddate,
      studentId: state.studentId
    };
    axios
      .post("/courses", obj)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error);
      });
    setLoading(false);

    setState({
      name: "",
      startdate: "",
      enddate: "",
      studentId: ""
    });
  };

  return (
    <React.Fragment>
      <h3 align="center">Course enrollment</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Course Name: </label>
          <input
            type="text"
            className="form-control"
            value={state.name}
            onChange={addCourse}
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label>Startdate: </label>
          <input
            type="date"
            className="form-control"
            value={state.startdate}
            onChange={addCourse}
            id="startdate"
            required
          />
        </div>
        <div className="form-group">
          <label>Endate: </label>
          <input
            type="date"
            className="form-control"
            value={state.enddate}
            onChange={addCourse}
            id="enddate"
            required
          />
        </div>
        <select id="studentId" onChange={addCourse} className="browser-default">
          <option>Choose student</option>
          {students.student.map(list => {
            return (
              <option key={list.id} value={list.id}>
                {list.name}
              </option>
            );
          })}
        </select>
        <br></br>
        <button
          className="btn waves-effect blue lighten-1"
          type="submit"
          name="action"
          disabled={loading}
          onClick={HandleClick}
        >
          {loading ? "loading..." : "save"}
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddCourse;
