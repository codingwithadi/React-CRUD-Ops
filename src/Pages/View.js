import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function View() {

  const [users, setUsers] = useState([]);

  //const { userId } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:9005/api/users");
    console.log(result.data);
    setUsers(result.data);
  }

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:9005/api/user/${userId}`);
    loadUsers();

  }


  return (
    <div className='container'>
      <div className='py-4'>

        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th >Id</th>
              <th >Full Name</th>
              <th >Username</th>
              <th >Mobile Number</th>
              <th>Email ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((users, index) => (
                <tr>
                  <th scope="row" key={index}>{users.userId}</th>
                  <td>{users.userFullName}</td>
                  <td>{users.userName}</td>
                  <td>{users.userMobileNumber}</td>
                  <td>{users.userEmail}</td>
                  <td>
                    <Link className='btn btn-success mx-2' to={`/singleUser/${users.userId}`}>View</Link>
                    <Link className='btn btn-outline-primary mx-2' to={`/editUser/${users.userId}`}>Update</Link>
                    <button className='btn btn-outline-danger mx-2' onClick={() => deleteUser(users.userId)}>Delete</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default View