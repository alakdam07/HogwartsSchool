import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../Table/Table";
import "./Display.css";
const Display = () => {
  const [state, setState] = useState({ students: [], count: "" });
  const [searchItem, setsearchItem] = useState({
    item: ""
  });

  const Search = e => {
    setsearchItem({ item: e.target.value });
  };

  useEffect(() => {
    axios
      .get("/students")
      .then(response => {
        setState({
          students: response.data.students,
          count: response.data.count
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  const nameFilter = state.students.filter(list => {
    return list.name.toLowerCase().includes(searchItem.item.toLowerCase());
  });

  return (
    <div>
      <h3 align="center">Student tables</h3>
      <p align="center">Total students: {state.count}</p>
      <div className="input-body">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="search student" onChange={Search} />
          </div>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Address</th>
            <th>Zipcode</th>
            <th>City</th>
            <th>Phone</th>
            <th>Email</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        {nameFilter.map((object, index) => {
          return (
            <tbody key={index}>
              <Table obj={object} />
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Display;
