import React from 'react';
import './App.css';
import ListItem from './Components/ListItems';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
           <Route  path="/"   component={ListItem} />
         </Switch>
       </div>
    </Router> 
  );
}

export default App;
