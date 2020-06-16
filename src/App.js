// Format and structure source : https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8109004?start=195#content
import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Instructions from './components/Instructions/Instructions';
import Thankyou from './components/Thankyou/Thankyou';
import Quiz from './containers/Quiz/Quiz';
import Switcher from './components/Switcher/Switcher'

class App extends Component {
  state = {
    currentUser:{},
    seeLogin:true,
    seeInstructions:false,
    seeQuiz:false,
    seeThankyou:false,
    isUserLoggedIn:false
  }
  process = {
    fetchUserDetails : (user) => {
      this.state.currentUser = user;
      this.setState({isUserLoggedIn:true,seeInstructions:true})
    },
    logout : () => {
      this.setState({currentUser:{},
        seeLogin:true,
        seeInstructions:false,
        seeQuiz:false,
        seeThankyou:false,
        isUserLoggedIn:false})
    },
    viewQuiz:() => {
      this.setState({seeQuiz:true,seeInstructions:false,seeLogin:false})
    },
    submitQuiz:() => {
      this.setState({seeQuiz:false,seeInstructions:false,seeLogin:false,seeThankyou:true})
    }
  }
  
  render() {
    let display;
    if(this.state.seeLogin && !this.state.isUserLoggedIn){
      display = <Login userDetails={this.process.fetchUserDetails.bind(this)}/>;
    }else if(this.state.isUserLoggedIn && this.state.seeInstructions){
      display = 
      <div>
        <Switcher currentUser={this.state.currentUser} logout={this.process.logout}/>
        <Instructions next={this.process.viewQuiz}/>
      </div>
    }else if(this.state.isUserLoggedIn && this.state.seeQuiz){
      display =
      <div>
        <Switcher currentUser={this.state.currentUser} logout={this.process.logout}/>
        <Quiz submit={this.process.submitQuiz}/>
      </div>
    }else if(this.state.isUserLoggedIn && this.state.seeThankyou){
      display = 
      <div>
        <Switcher currentUser={this.state.currentUser} logout={this.process.logout}/>
        <Thankyou />
      </div>
    }
    return (
      // https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/
        <section className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="App">
              {display}
            </div>
          </div>
        </section>
      
    );
  }
}
export default App;
