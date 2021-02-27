import logo from './logo.svg';
import './App.css';
import React from 'react'
import firebase from './firebase'
import history from './history';

const firestore = firebase.firestore();

const GameOver = (props) => {

    return (
      <div className="gameover">
        <img className = 'background-image' src ='../brickwall.jpg' />
        <h1>Game Over!</h1>
        <h2>Thanks for Playing</h2>
      </div>
    );
}

export default GameOver;
