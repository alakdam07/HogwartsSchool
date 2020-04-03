import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Table = props => {
  const removeData = () => {
    axios
      .delete("/students/" + props.obj.id)
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <tr>
        <td>{props.obj.name}</td>
        <td>{props.obj.birthday}</td>
        <td>{props.obj.address}</td>
        <td>{props.obj.zipcode}</td>
        <td>{props.obj.city}</td>
        <td>{props.obj.phone}</td>
        <td>{props.obj.email}</td>
        <td>
          <Link
            to={"/edit/" + props.obj.id}
            className="waves-effect waves-light btn"
          >
            Edit
          </Link>
        </td>
        <td>
          <button onClick={removeData} className="waves-effect red btn ">
            Remove
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Table;
