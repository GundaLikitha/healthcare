import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from "./components/pages/SignUp";
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Records from './components/pages/Records';
import Recommendtions from './components/pages/Recommendtions';
import hospitalinfo from './components/pages/Hospital info';
import RecordDetails from './components/pages/RecordDetails';
import Feedback from './components/feedback'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/records' component={Records} />
          <Route path='/recorddetails' component={RecordDetails}/>
          <Route path='/recommendations' component={Recommendtions} />
          <Route path='/hospitalinfo' component={hospitalinfo} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/login'  component={Login} />
          <Route path='/feedback'  component={Feedback} />
        </Switch>
      </Router>
    </>
  );
}

export default App;