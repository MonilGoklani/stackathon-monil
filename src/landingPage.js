import logo from './logo.svg';
import './App.css';
import React from 'react'
import firebase from './firebase'
import history from './history';

const firestore = firebase.firestore();

class LandingPage extends React.Component{
  constructor() {
    super()
    this.state = {
      name: 'World'
    }
    this.enterGame = this.enterGame.bind(this)
  }

async getPlayers(docRef){
    let myData = {}
    await docRef.get().then(function(doc){
      if(doc && doc.exists){
         myData = doc.data()
      }
    })
    return myData
}

async enterGame(ev){
    ev.preventDefault()
    let gameCode = document.querySelector('#gameCode').value
    let playerName = document.querySelector('#playerName').value
    window.localStorage.setItem('gameCode',gameCode.toString())
    window.sessionStorage.setItem('name',playerName.toString())
    const docRef = firestore.doc(`/${gameCode}/players`)
    
    let playerObject = await this.getPlayers(docRef)
    let players = Object.values(playerObject) || []

    if(!players.includes(playerName)){
        players.push(playerName)
    }
    
    if(players.length<=4){
        let playerField = 'player' + players.length.toString()
        let playerValue = playerName
        await docRef.set({...playerObject,[playerField]:playerValue})
        history.push(`/newgame/${playerField}`)
    }else{
        alert('Create New Game by entering a unique Game Code')
    }
  }

  render(){
    const {enterGame} = this
    return (
      <div className="App">
        <header className="App-header">
            <p id='title'>Enter Name</p>
            <input type='textfield' id='playerName'></input>
            <p id='title'>Enter Game Code</p>
            <input type='textfield' id='gameCode'></input>
            <button onClick={(ev)=>enterGame(ev)}>submit</button>
        </header>
      </div>
    );
  }
}

export default LandingPage;
