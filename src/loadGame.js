import logo from "./logo.svg";
import "./App.css";
import React from "react";
import firebase from "./firebase";
import history from "./history";
import questionBank from './questionBank'
import Answers from './answers'

const firestore = firebase.firestore();
const gameCode = window.localStorage.getItem("gameCode") * 1;
const docRef = firestore.doc(`/${gameCode}/players`);

class LoadGame extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 30,
      round: 1,
    };
    this.startCounter = this.startCounter.bind(this);
  }

  startCounter() {
    let timerId = setInterval(() => {
      if (this.state.round > 5) clearInterval(timerId);
      else if (this.state.counter > 0) {
        let counter = this.state.counter - 1;
        this.setState({ counter });
      } else {
        this.setState({ counter: 30 });
        this.setState({ round: this.state.round + 1 });
      }
    }, 1000);
  }

  componentDidMount() {
    this.startCounter();
  }

  render() {
    
    const { counter } = this.state;
    const { round } = this.state;
    const { player } = this.props
    const question = questionBank[round]
    // const {startCounter} = this
    // if(question<5) startCounter()
    return (
      <div>
        <p>{round<6?counter:''}</p>
        {counter > 0 ? (
          <p>{question}</p>
        ) : (
          ""
        )}
        <Answers player={player} round={round}/>
      </div>
    );
  }
}

export default LoadGame;
