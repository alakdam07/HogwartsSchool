import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [state, setState] = useState({
    name: "",
    birthday: "",
    address: "",
    zipcode: "",
    city: "",
    phone: "",
    email: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeStudent = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const obj = {
      name: state.name,
      birthday: state.birthday,
      address: state.address,
      zipcode: state.zipcode,
      city: state.city,
      phone: state.phone,
      email: state.email
    };

    axios
      .post("/students", obj)
      .then(res => {
        window.location = "/display";
      })
      .catch(error => {
        setError(error);
      });
    setLoading(false);
    setState({
      name: "",
      birthday: "",
      address: "",
      zipcode: "",
      city: "",
      phone: "",
      email: ""
    });
  };

  return (
    <React.Fragment>
      <h3 align="center">Student registration form</h3>

      {error ? (
        <h3 align="center" className="red-text">
          This student is already registered
        </h3>
      ) : null}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Student Name: </label>
          <input
            type="text"
            className="form-control"
            value={state.name}
            onChange={onChangeStudent}
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label>Birthday: </label>
          <input
            type="date"
            className="form-control"
            value={state.birthday}
            onChange={onChangeStudent}
            id="birthday"
            required
          />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input
            type="text"
            className="form-control"
            value={state.address}
            onChange={onChangeStudent}
            id="address"
            required
          />
        </div>
        <div className="form-group">
          <label>Zipcode: </label>
          <input
            type="number"
            className="form-control"
            value={state.zipcode}
            onChange={onChangeStudent}
            id="zipcode"
            required
          />
        </div>
        <div className="form-group">
          <label>City: </label>
          <input
            type="text"
            className="form-control"
            value={state.city}
            onChange={onChangeStudent}
            id="city"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <input
            type="tel"
            className="form-control"
            value={state.phone}
            onChange={onChangeStudent}
            id="phone"
            required
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            value={state.email}
            onChange={onChangeStudent}
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <button
            className="btn waves-effect blue lighten-1"
            type="submit"
            name="action"
            disabled={loading}
          >
            {loading ? "loading..." : "save"}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Create;
