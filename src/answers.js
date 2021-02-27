import logo from "./logo.svg";
import "./App.css";
import React from "react";
import firebase from "./firebase";
import history from "./history";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';

const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
});


const firestore = firebase.firestore();
const gameCode = window.localStorage.getItem("gameCode") * 1;


class Answers extends React.Component {
  constructor(props) {
    super();
    this.state = {
        answers: {},
        selected:0
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
    this.setState({selected:!this.state.selected})
  }

  render() {
    const {classes} = this.props
    //console.log('Answers ',this.state.answers)
    const {selected} = this.state
    const {submitAnswer} = this
    const {round,player} = this.props
    return (
      <div>
            {!selected?(
              <div className='answers'>
                <form className={classes.root}>
                <TextField type='textfield' id='answer' variant='filled'/>
                </form>
                <Button variant="contained" color="secondary" component="span" onClick={(ev)=>submitAnswer(ev,round,player)}>Submit</Button>
              </div>
            ):<CheckIcon style={{fontSize:'6rem',color:'rgb(255, 208, 0)'}}/>}
      </div>
    );
  }
}

export default withStyles(styles)(Answers);
