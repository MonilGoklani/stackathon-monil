import logo from "./logo.svg";
import "./App.css";
import React from "react";
import firebase from "./firebase";
import Button from '@material-ui/core/Button';
import questionBank from "./questionBank";
import history from './history'

const firestore = firebase.firestore();
const gameCode = window.localStorage.getItem("gameCode") * 1;
const docRef = firestore.doc(`/${gameCode}/players`);
const maxRoundTime=20
const maxRounds=3

class Votes extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
      round: 1,
      answers: [],
      votes: {},
      winner: [],
      selectedAnswer:''
    };
    this.startCounter = this.startCounter.bind(this);
    this.submitVote = this.submitVote.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this)
  }

  async getVotes(votesRef) {
    let myData = {};
    await votesRef.onSnapshot((doc) => {
      if (doc && doc.exists) {
        myData = doc.data();
        this.setState({
          votes: myData,
        });
      }
    });
  }

  async getAnswers(answerRef) {
    let myData = {};
    await answerRef.onSnapshot((doc) => {
      if (doc && doc.exists) {
        myData = doc.data();
        console.log(myData)
        console.log('player ',this.props.match.params.id)
        const playerAnswer = myData[this.props.match.params.id]
        this.setState({
          answers: [...this.state.answers, Object.values(myData).filter(answer=>answer!==playerAnswer)],
        });
      }
    });
  }

  startCounter() {
    let timerId = setInterval(() => {
      if (this.state.round > maxRounds) {
        clearInterval(timerId);
        history.push('/gameover')
      } else if (this.state.counter < maxRoundTime) {
        let counter = this.state.counter + 1;
        this.setState({ counter });
      } else {
        this.setState({ counter: 0 });
        this.setState({ round: this.state.round + 1 });
      }
    }, 1000);
  }

  async submitVote(answer, round, player) {
    const votesObj = "q_" + round.toString() + "_votes";
    const answerObj = "q_" + round.toString() + "_answers";
    const votesRef = firestore.doc(`/${gameCode}/${votesObj}`);
    const answerRef = firestore.doc(`/${gameCode}/${answerObj}`);
    await votesRef.set({ ...this.state.votes, [player]: answer });
    await this.calculateWinner(votesRef, answerRef);
    this.setState({selectedAnswer:answer})
  }

  componentDidMount() {
    this.startCounter();
    [1, 2, 3, 4, 5].map((round) => {
      const votesObj = "q_" + round.toString() + "_votes";
      const answerObj = "q_" + round.toString() + "_answers";
      const votesRef = firestore.doc(`/${gameCode}/${votesObj}`);
      const answerRef = firestore.doc(`/${gameCode}/${answerObj}`);
      this.getAnswers(answerRef);
      this.getVotes(votesRef);
    });
  }

  async calculateWinner(votesRef, answerRef) {
    let votes = {};
    let answers = {};
    await votesRef.get().then(function (doc) {
      if (doc && doc.exists) {
        votes = doc.data();
      }
    });
    await answerRef.get().then(function (doc) {
      if (doc && doc.exists) {
        answers = doc.data();
      }
    });

    const winningAnswer = (answers, votes) => {
      const voteValues = Object.values(votes);
      let voteCount = voteValues.reduce((accum, curr) => {
        if (Object.values(answers).includes(curr)) {
          accum[curr] ? (accum[curr] += 1) : (accum[curr] = 1);
        }
        return accum;
      }, {});

      return Object.keys(voteCount).filter((x) => {
        return voteCount[x] == Math.max.apply(null, Object.values(voteCount));
      });
    };
    let winner = winningAnswer(answers,votes)
    const winnerRef = firestore.doc(`/${gameCode}/winner`);
    await winnerRef.set({winner})
    winnerRef.onSnapshot((doc) => {
        if (doc && doc.exists) {
          let winner = Object.values(doc.data());
          this.setState({winner})
        }
      });
  }

  render() {
    const { counter,round,selectedAnswer,answers,winner } = this.state;
    const question = questionBank[round]
    const player = this.props.match.params.id;
    const answerList = answers.length ? answers[round - 1] : [];
    const { submitVote } = this;
    console.log(winner)
    return (
      <div className="votes">
        <img className = 'background-image' src ='../brickwall.jpg'/>
        <div className="votecounter">
            <h3>{counter < maxRoundTime-5 ? `You have ${maxRoundTime-5} seconds` : ''}</h3>
            {counter<maxRoundTime-5?(
                <div className="counterbox">
                    <p>{round <= maxRounds  && counter < maxRoundTime-5? counter : ""}</p>
                </div>
            ):''}
        </div>
        <div className='voteQuestion'>
            {counter<maxRoundTime-5?question:''}
        </div>
        <div className='answerList'>
        {answerList && counter<maxRoundTime-5
        ? answerList.map((answer) => (
            <Button variant="contained" color={selectedAnswer===answer?"default":'primary'} component="span" onClick={() => submitVote(answer, round, player)}>
                {answer}
            </Button>
            ))
        : (
        <div className='winningAnswer'>
            <h2>Winning Answer:</h2>
            <div className='winningAnswer'>
            {winner.map(winner=>{
                return(
                    <h1>{winner}</h1>
                )
            })}
            </div>
        </div>
        )
        }
        </div>
      </div>
    );
  }
}

export default Votes;
