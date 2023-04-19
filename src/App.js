import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import View from './Pages/View';
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditUser from './Pages/EditUser';
import SingleUser from './Pages/SingleUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/viewUser" element={<View />} />
          <Route exact path="editUser/:id" element={<EditUser />} />
          <Route exact path="singleUser/:id" element={<SingleUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
