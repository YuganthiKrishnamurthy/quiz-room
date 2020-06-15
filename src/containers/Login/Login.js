import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import classes from './Login.css';
import Aux from '../../hoc/Auxiliary'
// Video source :https://pixabay.com/videos/letters-fonts-alphabet-matrix-5157/?fbclid=IwAR1tn3FNQmtJjdbrvKMZtOa-ujgopRJmyXEsna-AJySfD2y8JmRKLnAKLFQ
import video from '../../Assets/video.mp4'



class Login extends Component  {
    constructor(props) {
      super(props);
    }
    state = {
      credentials : [
        {username:'user1', password:'Aa@123456', securityQuestion:'Which place you were born?', securityAnswer:'xx'},
        {username:'user2',password:'Bb@123456', securityQuestion:'What\'s your favorite vacation spot?', securityAnswer:'yy'},
        {username:'user3',password:'Cc@123456', securityQuestion:'What\'s your high school name?', securityAnswer:'zz'}
      ],
      enteredUsername: '',
      enteredPassword: '',
      enteredSecurityAnswer:'',
      currentUserDetails:{},
      isUserLoggedIn:false,
      improperLogin:false,
      showSecurityQuestion:false,
      enableShowPassword:false,
      showForgottenPassword:false
    }
    login_functinalities = {
      enterCredentials:(event,details)=>{
        this.setState({[details]:event.target.value});
      },
      validateUserDetails:() =>{
        let user = this.state.credentials.find(user => user.username === this.state.enteredUsername)
        this.setState({currentUserDetails:user})
        if((this.state.enteredUsername === this.state.currentUserDetails.username) &&
          (this.state.enteredPassword === this.state.currentUserDetails.password)){
            this.setState({isUserLoggedIn:true,improperLogin:false});
            this.props.userDetails(this.state.currentUserDetails);
        }else{
          this.setState({isUserLoggedIn:false,improperLogin:true})
        }
      },
      validateUsername:(event) =>{
        let user = this.state.credentials.find(user => user.username === event.target.value)
        this.setState({currentUserDetails:user})
        if(user && (user.username===event.target.value)){
          this.setState({showSecurityQuestion:true})
        }else{
          this.setState({showSecurityQuestion:false})
        }
        
      },
      validateSecurityAnswer:(event) => {
        this.setState({enteredSecurityAnswer:event.target.value});
        if(event.target.value===this.state.currentUserDetails.securityAnswer){
          this.setState({enableShowPassword:true})
        }else{
          this.setState({enableShowPassword:false})
        }
      },
      showPassword : () => {
        if(this.state.currentUserDetails.securityAnswer === this.state.enteredSecurityAnswer){
          console.log("yeah")
          this.setState({showForgottenPassword:true})
        }else{
          this.setState({showForgottenPassword:false})
        }
      },
      onClosePopup:() =>{
        this.setState({
        enteredSecurityAnswer:'',
        currentUserDetails:{},
        isUserLoggedIn:false,
        improperLogin:false,
        showSecurityQuestion:false,
        enableShowPassword:false,
        showForgottenPassword:false});
      }
    }

    render() {
      return (
        <Aux >
          <section>
            {/* Style reference: https://www.youtube.com/watch?v=05ZHUuQVvJM */}
            <video className={classes.videoContainer} autoPlay="autoplay" loop="loop" muted>
              <source src={video} type="video/mp4" />
            </video> 
            
            <article className={classes.loginContent}>
              <div >
                <div>
                  <span className={classes.loginDetails}>Username</span>
                  <input type="text" className={classes.userNameField} onChange={(event)=>this.login_functinalities.enterCredentials(event,"enteredUsername")}/>
                </div>
                <div>
                  <span className={classes.loginDetails}>Password</span>
                  <input type="password" className={classes.passwordField} onChange={(event)=>this.login_functinalities.enterCredentials(event,"enteredPassword")}/>
                  {this.state.improperLogin ? <div className={classes.warning}>Please enter the correct username and password</div>: null}
                </div>
                {/* https://www.npmjs.com/package/reactjs-popup */}
                <Popup trigger={<div className={classes.forgot}> Forgot username/password ? </div>} modal>
                  {close => (
                    <section >
                      <div>
                        <div className={classes.popupName}>Forgot username/password ?</div>
                        <div >
                          <a className="close" onClick={()=>{this.login_functinalities.onClosePopup();close();}}>&times;</a>
                        </div>
                        
                      </div>
                      
                      
                      <hr/>
                      <div>
                        <span className={classes.popupUsernameEnter}>Please enter your valid username</span>
                        <input className={classes.popupTextField} type="text" onChange={(event)=>this.login_functinalities.validateUsername(event)}/>
                        {this.state.showSecurityQuestion ? 
                          <div>
                            <div className={classes.popupUsernameEnter}>{this.state.currentUserDetails.securityQuestion}</div> 
                            <div><input type="text"  onChange={(event)=>this.login_functinalities.validateSecurityAnswer(event)}/></div>
                          </div>
                        : null}
                      </div>
                        <button className="btn btn-primary" disabled={!this.state.enableShowPassword} onClick={this.login_functinalities.showPassword}>Show Password</button>
                      {this.state.showForgottenPassword ? 
                        <div>
                          <div className={classes.popupUsernameEnter}>Your current password is: {this.state.currentUserDetails.password}</div>
                        </div>
                      :null}
                    </section>
                    
                  )}
                  
                </Popup>
                {/* Bootstrap button : https://www.w3schools.com/bootstrap/bootstrap_buttons.asp */}
                <div className={classes.loginButton}>
                  <button className="btn btn-primary" onClick={this.login_functinalities.validateUserDetails.bind(this)}>Login</button>
                </div>
              </div>
            </article>
          </section>
        </Aux>
      );
    }
};

export default Login;