import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/CreateStudent/Create";
import Display from "./components/Display/Display";
import Editing from "./components/Edit/Editing";
import Herocard from "./components/Herocard/Herocard";
import AddCourse from "./components/AddCourse/AddCourse";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Herocard} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/display" component={Display} />
          <Route exact path="/edit/:id" component={Editing} />
          <Route exact path="/addcourse" component={AddCourse} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
