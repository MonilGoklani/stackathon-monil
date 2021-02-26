import logo from './logo.svg';
import './App.css';
import React from 'react'
import firebase from './firebase'
import history from './history';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
}));

const LandingPage = (props) => {

const classes = useStyles();
const getPlayers = async(docRef)=>{
    let myData = {}
    await docRef.get().then(function(doc){
      if(doc && doc.exists){
         myData = doc.data()
      }
    })
    return myData
}

const enterGame = async(ev) =>{
    ev.preventDefault()
    let gameCode = document.querySelector('#gameCode').value
    let playerName = document.querySelector('#playerName').value
    const docRef = firestore.doc(`/${gameCode}/players`)
    
    let playerObject = await getPlayers(docRef)
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
        alert('Game Full : Create New Game by entering a unique Game Code')
    }
  }

    return (
      <div className="App">
        <img className = 'background-image' src ='../brickwall.jpg' />
        <div className="App-header">
            <p className = 'gametitle'>WiseCracker!</p>
            <form className={classes.root}>
            <p className='title'>Name</p>
            <TextField type='textfield' id='playerName' variant='filled'/>
            <p className='title'>Game Code</p>
            <TextField type='textfield' id='gameCode' variant='filled'/>
            </form>
            <Button variant="contained" color="secondary" component="span" onClick={(ev)=>enterGame(ev)}>Enter Game</Button>
        </div>
      </div>
    );
}

export default LandingPage;
