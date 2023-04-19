import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function SingleUser() {

  const [user, setUser] = useState({
    userFullName: "",
    userName: "",
    userMobileNumber: "",
    userEmail: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9005/api/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {id}
              <br />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Full Name: </b>
                  {user.userFullName}
                </li>
                <li className="list-group-item">
                  <b>UserName: </b>
                  {user.userName}
                </li>
                <li className="list-group-item">
                  <b>Mobile Number: </b>
                  {user.userMobileNumber}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {user.userEmail}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleUser;