import logo from './logo.svg';
import './App.css';
import React from 'react'
import firebase from './firebase'
import history from './history';

const firestore = firebase.firestore();
const gameCode = window.localStorage.getItem("gameCode") * 1;
const docRef = firestore.doc(`/${gameCode}/players`);

class GetVotes extends React.Component{
  constructor() {
    super()
    this.state = {
      votes: {},
      answers:{}
    }
    this.getVotes = this.getVotes.bind(this)
  }

async getVotes(votesRef){ 
    let myData = {}
    await votesRef.onSnapshot(doc=>{
      if(doc && doc.exists){
        myData = doc.data()
        this.setState({
          votes:myData
        })
      }
    })
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
        const votesObj = 'q_'+round.toString()+'_votes';
        const answerObj = 'q_'+round.toString()+'_answers';
        const votesRef = firestore.doc(`/${gameCode}/${votesObj}`);
        const answerRef = firestore.doc(`/${gameCode}/${answerObj}`);
        this.getVotes(votesRef)
        this.getAnswers(answerRef)
    })
  }


// async enterGame(ev){
//     ev.preventDefault()
//   }

  render(){
    const{answers}=this.state
    console.log(answers)
    return (
      <div className="App">
        <p>Hello World</p>
      </div>
    );
  }
}

export default GetVotes;
