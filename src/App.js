import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Authorisation/Login';
import Register from './Authorisation/Register';
import Injury_form from './Injury/Injury_form';
import Injury_list from './Injury/Injury_list';
import Home from './Components/Home';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 


function App() {
  return (
    <Router>
       <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/login" element={Login} />
        <Route path="/register" element={Register} />
        <Route path ="/injuries" element={Injury_list}/>
        <Route path ="/injuriesForm" element={Injury_form}/>
        </Routes>
        
    </div>
    </Router>
  );
}

export default App;
