import logo from './logo.svg';
import './App.css';
import React from 'react'
import firebase from './firebase'
import history from './history';
import LoadGame from './loadGame'

const firestore = firebase.firestore();
const gameCode = window.localStorage.getItem('gameCode')*1
const docRef = firestore.doc(`/${gameCode}/players`)

class NewGame extends React.Component{
  constructor() {
    super()
    this.state = {
      players: []
    }
    this.getPlayers = this.getPlayers.bind(this)
  }


async getPlayers(docRef){ 
    let myData = {}
    await docRef.onSnapshot(doc=>{
      if(doc && doc.exists){
        myData = doc.data()
        this.setState({
          players:Object.values(myData)
        })
      }
    })
}

  componentDidMount () {
    this.getPlayers(docRef)
  }

  render(){
    const {players} = this.state
    const {enterGame} = this
    return (
      <div id='newgame'>
        <img className = 'background-image' src ='../brickwall.jpg'/>
        <div className = 'title'>
          {players.length<4?
          (<h3>...Waiting for more players</h3>):
          <h3>IT'S ON LIKE DONKEY KONG</h3>}
        </div>
        <div className="listofplayers">
            {players.map(player=>{
                return(
                    <p>{player}</p>
                )
            })}
        </div>
        <div className='loadGame'>
          {players.length>=4?(
              <LoadGame player = {this.props.match.params.id}/>
          ):'Waiting for All players'}
        </div>
      </div>
    );
  }
}

export default NewGame;
