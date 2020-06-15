import React, { Component} from 'react';
import classes from './Quiz.css';
import Aux from '../../hoc/Auxiliary'
{/* DummyText(Lorem-ipsum) = https://www.blindtextgenerator.com/lorem-ipsum */}
class Quiz extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        questionSet:[
            {questionId:1,question:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",options:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing elit."],selectedOption:null,type:"single"},
            {questionId:2,question:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",options:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing elit."],selectedOption:null,type:"single"},
            {questionId:3,question:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",options:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing elit."],selectedOption:null,type:"single"}
        ],
        currentQuestion:{}
    }
    shouldComponentUpdate(prevProps,nextState){
        return true;
    }
    quiz_functionalities = {
        startQuiz:() =>{
            this.setState({currentQuestion:this.state.questionSet[0]});
        },
        selectNext:(arg)=> {
            let index = this.state.questionSet.findIndex(question => question.questionId==arg+1);
            let question = this.state.questionSet[index]
            this.setState({currentQuestion:question});
        },
        reset : () => {
            
        },
        selectPrevious:(arg) =>{
            let index = this.state.questionSet.findIndex(question => question.questionId==arg-1);
            let question = this.state.questionSet[index]
            this.setState({currentQuestion:question});
        },
        onSingleSelect:(options,questionId) => {
            let index = this.state.questionSet.findIndex(p => {
                return p.questionId == questionId;
            });
            let question = {...this.state.questionSet[index]}
            question.selectedOption = options;
            this.setState({currentQuestion:question})
            const questionList = [...this.state.questionSet]
            questionList[index] = question;
            this.setState({questionSet:questionList})
        }
        
    }
    
    render() {
        let question = null;
        if(this.state.currentQuestion.type=="single"){
            question=
            <div >
                <div className={classes.optionContainer}><input type="radio" 
                        value={this.state.currentQuestion.options[0]} 
                        checked={this.state.currentQuestion.options[0] == this.state.currentQuestion.selectedOption} 
                        onChange={()=>this.quiz_functionalities.onSingleSelect(this.state.currentQuestion.options[0],this.state.currentQuestion.questionId)} />
                        <span className={classes.options}>{this.state.currentQuestion.options[0]}</span></div>
                <div className={classes.optionContainer}><input type="radio"
                        value={this.state.currentQuestion.options[1]}  
                        checked={this.state.currentQuestion.options[1] == this.state.currentQuestion.selectedOption} 
                        onChange={()=>this.quiz_functionalities.onSingleSelect(this.state.currentQuestion.options[1],this.state.currentQuestion.questionId)} />
                        <span className={classes.options}>{this.state.currentQuestion.options[1]}</span></div>
                <div className={classes.optionContainer}><input type="radio"
                        value={this.state.currentQuestion.options[2]}  
                        checked={this.state.currentQuestion.options[2] == this.state.currentQuestion.selectedOption} 
                        onChange={()=>this.quiz_functionalities.onSingleSelect(this.state.currentQuestion.options[2],this.state.currentQuestion.questionId)} />
                        <span className={classes.options}>{this.state.currentQuestion.options[2]}</span></div>
            </div>
        }
        return (
            <Aux>
                <div className={classes.startQuizButton}>
                    {/* {/* Bootstrap button : https://www.w3schools.com/bootstrap/bootstrap_buttons.asp  */}
                    <button className="btn btn-primary" onClick={this.quiz_functionalities.startQuiz}>Start Quiz</button>
                </div>
                <div className={classes.quizSection}>
                    {this.state.currentQuestion && this.state.currentQuestion.questionId ?
                        <div>
                            <div>
                                <div className={classes.questionNumbers}>QUESTION {this.state.currentQuestion.questionId}</div>
                                <div className={classes.questionFormat}>{this.state.currentQuestion.question}</div>
                                {question}
                            </div>
                            <div>
                                {(this.state.currentQuestion.questionId==3) ? null :
                                <button className={classes.controlButtonsNext} onClick={()=>this.quiz_functionalities.selectNext(this.state.currentQuestion.questionId)}>Next</button>
                                }
                                {this.state.currentQuestion.questionId>=2?<button className={classes.controlButtonsPrevious} onClick={()=>this.quiz_functionalities.selectPrevious(this.state.currentQuestion.questionId)}>Previous</button>:null}
                            </div>
                            
                            <div className={classes.startQuizButton}>
                                <button onClick={this.props.submit} className="btn btn-primary">Submit Quiz</button>
                            </div>
                            
                        </div> : null
                    }
                </div>
            
            </Aux>
        );
    }
    
}

export default Quiz;
