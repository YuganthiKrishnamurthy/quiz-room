import React, { Component} from 'react';
import classes from './Quiz.css';
import Aux from '../../hoc/Auxiliary'
/* DummyText(Lorem-ipsum) = https://www.blindtextgenerator.com/lorem-ipsum */

class Quiz extends Component {
    state = {
        questionSet:[
            {questionId:1,question:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",options:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing.","Lorem ipsum dolor sit amet, adipiscing elit."],selectedOption:null,type:"single"},
            {questionId:2,question:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",options:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing.","Lorem ipsum dolor sit amet, adipiscing elit."],selectedOption:null,type:"single"},
            {questionId:3,question:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",options:["Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","Lorem ipsum dolor sit amet, consectetuer adipiscing.","Lorem ipsum dolor sit amet, adipiscing elit."],selectedOption:null,type:"single"}
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
                <div className="row">
                    {/* https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/ */}
                    <section className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
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
                                    
                                </div> : null
                            }
                        </div>
                    </section>
                    <section className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <article className={classes.questionContainer}>
                            <div>
                                <div className={classes.questionHeading}>Questions</div>
                                <div className={classes.questionNumberDisplay}>1</div>
                                <div className={classes.questionNumberDisplay}>2</div>
                                <div className={classes.questionNumberDisplay}>3</div>
                                <div className={classes.questionNumberDisplay}>4</div>
                                <div className={classes.questionNumberDisplay}>5</div>
                            </div>
                            <div className={classes.legendAnswered}>
                                <span className={classes.legendAnsweredStyle}></span>
                                <span className={classes.legendAnsweredText} >Answered</span>
                            </div>
                            <div className={classes.legendUnAnswered}>
                                <span className={classes.legendUnAnsweredStyle}></span>
                                <span className={classes.legendUnAnsweredText}>Un-answered</span>
                            </div>
                            <div className={classes.legendSelected} >
                                <span className={classes.legendSelectedStyle} ></span>
                                <span className={classes.legendSelectedText} >Selected</span>
                            </div>
                            <div onClick={this.props.submit} className={classes.submitQuiz}>Submit answers for this quiz</div>
                        </article>
                    </section>
                    
                </div>
               
            
            </Aux>
        );
    }
    
}

export default Quiz;
