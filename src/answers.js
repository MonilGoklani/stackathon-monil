import logo from "./logo.svg";
import "./App.css";
import React from "react";
import firebase from "./firebase";
import history from "./history";


const firestore = firebase.firestore();
const gameCode = window.localStorage.getItem("gameCode") * 1;


class Answers extends React.Component {
  constructor(props) {
    super();
    this.state = {
        answers: {}
      }
      this.getAnswers = this.getAnswers.bind(this)
      this.submitAnswer = this.submitAnswer.bind(this)
  }

  async getAnswers(answerRef){ 
    let myData = {}
    await answerRef.onSnapshot(doc=>{
      if(doc && doc.exists){
        myData = doc.data()
        this.setState({
          answers:myData
        })
      }
    })
}

componentDidMount () {
    [1,2,3,4,5].map(round=>{
        const answerObj = 'q_'+round.toString()+'_answers';
        const answerRef = firestore.doc(`/${gameCode}/${answerObj}`);
        this.getAnswers(answerRef)
    })
  }

  submitAnswer(ev,round,player) {
    ev.preventDefault()
    const answerObj = 'q_'+round.toString()+'_answers';
    const answerRef = firestore.doc(`/${gameCode}/${answerObj}`);
    const answer = document.querySelector('#answer').value;
    answerRef.set({...this.state.answers,[player]:answer})
  }

  render() {
    console.log('Answers ',this.state.answers)
    const {submitAnswer} = this
    const {round,player} = this.props
    return (
      <div>
          <input id='answer'></input>
          <button onClick={(ev)=>submitAnswer(ev,round,player)}>Submit</button>
      </div>
    );
  }
}

export default Answers;
