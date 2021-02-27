import logo from './logo.svg';
import './App.css';
import {Route,Switch,Router,Redirect} from 'react-router-dom'
import React from 'react'
import LandingPage from './landingPage'
import NewGame from './newGame'
import history from './history'
import Votes from './votes'
import GameOver from './gameover'


class App extends React.Component{

  render(){
    return (
      <Router history={history}>
        <Switch>
          <Route exact path ='/' component = {LandingPage}/>
          <Route exact path ='/newgame/:id' component = {NewGame} />
          <Route exact path = '/vote/:id' component = {Votes} />
          <Route exact path = '/gameover' component = {GameOver} />
        </Switch>
      </Router>
    );
  }
}

export default App;
