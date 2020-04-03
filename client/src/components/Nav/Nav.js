import React from "react";
import "./Nav.css";
export default function Nav() {
  return (
    <React.Fragment>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper red">
            <a href="/" className="brand-logo">
              <img
                src="https://res.cloudinary.com/dtnhtcwwg/image/upload/v1585562020/hogwarts-7917_f42rzn.png"
                alt="pic"
                className="img"
                to="/home"
              />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/display">Hero tables</a>
              </li>
              <li>
                <a href="/create"> Add new student</a>
              </li>
              <li>
                <a href="/addcourse">New course enrollment</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
