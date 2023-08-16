// import { Link } from 'react-router-dom';
// import * as userService from '../../utilities/users-service';


// export default function NavBar({ user, setUser }) {
//   function handleLogOut() {
//     userService.logOut();
//     setUser(null);
//   }

//   return (
//     <nav>
//       <Link to="/orders">Order </Link>
//       &nbsp; | &nbsp;
//       <Link to="/orders/new">Vehicles </Link>
//       &nbsp; | &nbsp;
//       <Link to="/vehicles">Vehicle History</Link>
//       &nbsp; | &nbsp;

//       <span>Welcome, {user.name}</span>
//       &nbsp;|&nbsp;
//       <Link to="" onClick={handleLogOut}>Log Out</Link>
//     </nav>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/orders">Order</Link>
        <span className="navbar-text">|</span>
        <Link className="navbar-brand" to="/orders/new">Vehicles</Link>
        <span className="navbar-text">|</span>
        <Link className="navbar-brand" to="/vehicles">Vehicle History</Link>
        <span className="navbar-text">|</span>
        <span class="glyphicon glyphicon-user blue"></span>
        <span className="navbar-text">Welcome, {user.name}</span>
        <span className="navbar-text">|</span>
        <Link className="navbar-brand" to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}
