import logo from './logo.svg';
import './App.css';
import {Route,Switch,Router,Redirect} from 'react-router-dom'
import React from 'react'
import LandingPage from './landingPage'
import NewGame from './newGame'
import history from './history'


class App extends React.Component{

  render(){
    return (
      <Router history={history}>
        <Switch>
          <Route exact path ='/' component = {LandingPage}/>
          <Route exact path ='/newgame/:id' component = {NewGame} />
        </Switch>
      </Router>
    );
  }
}

export default App;
