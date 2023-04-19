import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddUser() {
  //for navigating home page when form is submit.
  let navigate = useNavigate();
  //set data using userState hook
  const [user, setUser] = useState({
    userFullName: "",
    userName: "",
    userMobileNumber: "",
    userEmail: ""

  });

  //Initialize name variable to user
  const { userFullName, userName, userMobileNumber, userEmail } = user;

  //when input changes then this function call and field value set to the name variable and set to the user
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  //when user hit submit button then this fuction call and do stepwise execution 
  //with the help of axios lib post method this will call this url and save data into the database.
  //e.preventDefault(); -> is the prevent the default behaviour of the form submit action like werid url.
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios.post('http://localhost:9005/api/user', user)
      .then(response => console.log(response))
      .catch(error => console.error(error));
    alert("Submitted suceesfully");
    navigate("/viewUser");

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User Information</h2>

          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="UserFullName" className="form-label">
                Full Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Full Name"
                name="userFullName"
                value={userFullName}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="userName"
                value={userName}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Mobile" className="form-label">
                Mobile Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Mobile Number"
                name="userMobileNumber"
                value={userMobileNumber}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="userEmail"
                value={userEmail}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser