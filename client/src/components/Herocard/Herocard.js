import React, { useState, useEffect } from "react";
import "./Herocard.css";
import axios from "axios";
import moment from "moment";
const Herocard = () => {
  const [state, setState] = useState({ students: [], count: "" });

  useEffect(() => {
    axios
      .get("/students")
      .then(response => {
        setState({ students: response.data.students });
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  // console.log(state);

  return (
    <React.Fragment>
      <section className="section_one">
        <h3 className="sectionOne animated fadeInUp delay-1s heroText">
          Hogwarts School
        </h3>
      </section>
      <section className="section_two">
        <div className="cardsPosition">
          {state.students.map((list, id) => {
            return (
              <div className="cards" key={id}>
                <div className="row">
                  <div>
                    <div className="col s6 m5">
                      <div className="card blue-grey darken-1 animated fadeInUp delay-1.5s">
                        <div className="card-content white-text">
                          {" "}
                          <span className="card-title">{list.name}</span>
                          {list.courses.map((gymList, id) => {
                            return (
                              <div key={id}>
                                <h5>Course: {gymList.name}</h5>
                                <p>
                                  Startdate:{" "}
                                  {moment(gymList.startdate).format("L")}
                                </p>
                                <p>
                                  Enddate: {moment(gymList.enddate).format("L")}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Herocard;
