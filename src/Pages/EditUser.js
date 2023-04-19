import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  //for navigating home page when form is submit.
  let navigate = useNavigate();

  //user Param for getting data from url
  const { id } = useParams();

  //set data using userState hook
  const [user, setUser] = useState({
    userFullName: "",
    userName: "",
    userMobileNumber: "",
    userEmail: ""

  });

  //useEffect hook
  useEffect(() => {
    loadUser();
  }, []);

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
    await axios.put(`http://localhost:9005/api/user/${id}`, user);

    alert("Updated suceesfully");
    navigate("/viewUser");

  };

  //load user data into field for easy updating values

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9005/api/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User Information</h2>

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
              Update
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/viewUser">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditUser;