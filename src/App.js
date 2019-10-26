import React from 'react';
import { Home } from './Home';
import { Employee } from './Employee';
import { Employer} from './Employer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/employee" component={Employee}/>
        <Route path="/employer" component={Employer}/>
      </Router>
    </div>
  );
}

export default App;
