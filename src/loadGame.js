import logo from "./logo.svg";
import "./App.css";
import React from "react";
import firebase from "./firebase";
import history from "./history";
import questionBank from "./questionBank";
import Answers from "./answers";

const firestore = firebase.firestore();
const gameCode = window.localStorage.getItem("gameCode") * 1;
const docRef = firestore.doc(`/${gameCode}/players`);
const maxRoundTime = 30;
const maxRounds = 3;

class LoadGame extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: maxRoundTime,
      round: 1,
    };
    this.startCounter = this.startCounter.bind(this);
  }

  startCounter() {
    let timerId = setInterval(() => {
      if (this.state.round > maxRounds) {
        clearInterval(timerId);
        history.push(`/vote/${this.props.player}`);
      } else if (this.state.counter > 0) {
        let counter = this.state.counter - 1;
        this.setState({ counter });
      } else {
        this.setState({ counter: maxRoundTime });
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
    const { player } = this.props;
    const question = questionBank[round];
    return (
      <div>
        <div className="counter">
          {round<=maxRounds && counter<maxRoundTime?(
              <div className="counterbox">
                <p>{counter}</p>
              </div>
          ):''}
        </div>
        <div>
          {counter < maxRoundTime?(
            <div className="question">
              <h3>Round {round}</h3>
              <p>{question}</p>
              <Answers player={player} round={round} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default LoadGame;
