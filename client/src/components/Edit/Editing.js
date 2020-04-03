import React, { useState, useEffect } from "react";
import axios from "axios";

const Edit = props => {
  const [state, setState] = useState({
    name: "",
    birthday: "",
    address: "",
    zipcode: "",
    city: "",
    phone: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/students/" + props.match.params.id)
      .then(response => {
        setState({
          name: response.data.name,
          birthday: response.data.birthday,
          address: response.data.address,
          zipcode: response.data.zipcode,
          city: response.data.city,
          phone: response.data.phone,
          email: response.data.email
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props.match.params.id]);

  const onChangeName = e => {
    setState({
      name: e.target.value
    });
  };
  const onChangeBirthday = e => {
    setState({
      birthday: e.target.value
    });
  };
  const onChangAddress = e => {
    setState({
      address: e.target.value
    });
  };
  const onChangeZipcode = e => {
    setState({
      zipcode: e.target.value
    });
  };

  const onChangeCity = e => {
    setState({
      city: e.target.value
    });
  };
  const onChangePhone = e => {
    setState({
      phone: e.target.value
    });
  };
  const onChangeEmail = e => {
    setState({
      email: e.target.value
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
      .put("/students/" + props.match.params.id, obj)
      .then(res => console.log(res.data));
    setLoading(false);
    props.history.push("/display");
  };

  return (
    <div>
      <h3 align="center">Student </h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Student Name: </label>
          <input
            type="text"
            className="form-control"
            value={state.name}
            onChange={onChangeName}
            id="name"
          />
        </div>
        <div className="form-group">
          <label>Birthday: </label>
          <input
            type="date"
            className="form-control"
            value={state.birthday}
            onChange={onChangeBirthday}
            id="birthday"
          />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input
            type="text"
            className="form-control"
            value={state.address}
            onChange={onChangAddress}
            id="address"
          />
        </div>
        <div className="form-group">
          <label>Zipcode: </label>
          <input
            type="number"
            className="form-control"
            value={state.zipcode}
            onChange={onChangeZipcode}
            id="zipcode"
          />
        </div>
        <div className="form-group">
          <label>City: </label>
          <input
            type="text"
            className="form-control"
            value={state.city}
            onChange={onChangeCity}
            id="city"
          />
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <input
            type="tel"
            className="form-control"
            value={state.phone}
            onChange={onChangePhone}
            id="phone"
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            value={state.email}
            onChange={onChangeEmail}
            id="email"
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
    </div>
  );
};

export default Edit;
