import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">codingWithAdi</Link>
          <Link type="button" class="btn btn-success" to="/addUser">Add User</Link>
          <Link type="button" class="btn btn-outline-primary" to="/viewUser">Display Users</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;