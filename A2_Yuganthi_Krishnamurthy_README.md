# Assignment_2 

```
The idea is about developing quiz web application for a single user.  The task flow is simple and straight. 
Only a VALID user can login using LOGIN PAGE added with functionality to retrieve forgotten password using security question.
An INSTRUCTION PAGE that helps a user to understand the rules before taking the quiz.  
QUIZ PAGE is developed for a user to take the assessment.
THANKYOU PAGE mentions the successful completion and provides option for the user to access a copy of the completion certificate.

* Date Created: 03 JUN 2020
* Last Modification Date: 15 JUN 2020
```

## Author

* [Yuganthi Krishnamurthy](yg617681@dal.ca) - (Full Stack Developer)


## Getting Started

### Prerequisites

```
# Software
1.  Visual studio code
2.  Web Browser
3.  Heroku

# Plugins/Extensions and Libraries
1.  Node js
2.  NPM - Node Package Manager
3.  Bootstrap
4.  Font-awesome
5.  Reactjs-popup
6.  Create React App
7.  CSS - Cascading Style Sheets
8.  Github
9.  Gitlab

```

### Installing
```
1.  Install a web browser (google chrome/ mozilla firefox)
2.  Install visual studio code
3.  Install node js 
4.  Install various extensions in visual studio code - node/git 
5.  Install various modules using npm - react, reactjs-popup, css modules
6.  Clone the source code from the mentioned URL in git - 'https://git.cs.dal.ca/yuganthi/a2_yuganthi_krishnamurthy.git'
7.  Point the active terminal to the cloned source code using node command prompt
8.  Give the command 'npm start' for the application to run on web browser by url - 'https://localhost:3000'
```


### Break down into end to end tests
```
The below mentioned test cases represent end to end manual testing for our application
1.  Run 'npm start' in the specified path to run the application on browser
2.  Entering correct credentials for login
3.  Accessing Instructions page. 
4.  Selecting next button to start the quiz
5.  Answering all the questions in the Quiz page 
6.  Select the submit quiz button
7.  Accessing Thankyou page.
8.  Logging out navigates back to login page.
```

## Deployment

Deployed in Heroku - https://quiz-room.herokuapp.com/

## Development path for each page
```
1. Login Page
  - HTML - /src/containers/Login/Login.js
  - CSS - /src/containers/Login/Login.css
2. Instructions Page
  - HTML - /src/components/Instructions/Instructions.js
  - CSS - /src/components/Instructions/Instructions.css
3. Quiz Page
  - HTML - /src/containers/Quiz/Quiz.js
  - CSS - /src/containers/Quiz/Quiz.css
4. Thankyou Page
  - HTML - /src/components/Thankyou/Thankyou.js
  - CSS - /src/components/Thankyou/Thankyou.css
5. Switcher Component
  - HTML - /src/components/Switcher/Switcher.js
  - CSS - /src/components/Switcher/Switcher.css
```

## Built With

* [Bootstrap](//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css) - Used for styling elements and responsiveness across the applicaton
* [Font-Awesome] (https://fontawesome.com/v3.2.1/get-started/) - Custom icons
* [node.js] (https://nodejs.org/en/download/)- used to work with NPM (node package manager) for installing modules like Reactjs-popup and Create React App


## Sources Used

### Login.js

Lines 115 & 148
---------------

```
<Popup trigger={<div className={classes.forgot}> Forgot username/password ? </div>} modal></Popup>
```

The code above was created by adapting the code in [React Modal](https://react-popup.elazizi.com/react-modal/) as shown below: 

```
 <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>

```

- The code in [React Modal](https://react-popup.elazizi.com/react-modal/) was implemented by using it login page for forgot password popup
- [React Modal](https://react-popup.elazizi.com/react-modal/)'s Code was used because rendering popup at runtime is possible using react-js popup 
- [React Modal](https://react-popup.elazizi.com/react-modal/)'s Code was modified by adding the adding various validations and application based questions in order to see the password

### App.js

Lines 65 - 71
---------------

```
<section className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="App">
        {display}
    </div>
    </div>
</section>

```

The code above was created by adapting the code in [Meaning of numbers in “col-md-4”,“ col-xs-1”, “col-lg-2” in Bootstrap](https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/) as shown below: 

```
<body> 
    <div class="container"> 
        <div class=" row bg-primary col-lg-2">col-lg-2</div> 
        <div class=" row bg-success col-xs-1">col-xs-1</div> 
        <div class=" row bg-danger col-md-4">col-md-4</div> 
    </div> 
</body> 

```

- The code in [Meaning of numbers in “col-md-4”,“ col-xs-1”, “col-lg-2” in Bootstrap](https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/) was implemented by using it in jsx components for responsiveness 
- [Meaning of numbers in “col-md-4”,“ col-xs-1”, “col-lg-2” in Bootstrap](https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/) Code was used because, our web application needs to be responsive with respect to various devices.
- [Meaning of numbers in “col-md-4”,“ col-xs-1”, “col-lg-2” in Bootstrap](https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/) Code was modified by adding multiple resolutional commands in a single DOM (Data object model)

### Login.js

Lines 89 - 91
---------------

```
<video className={classes.videoContainer} autoPlay="autoplay" loop="loop" muted>
    <source src={video} type="video/mp4" />
</video> 

```

The code above was created by adapting the code in [The video loop attribute](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video_loop) as shown below: 

```
<video width="320" height="240" controls loop>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

```

- The code in [The video loop attribute](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video_loop)) was implemented by using it for setting video as background to the login page
- [The video loop attribute](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video_loop) Code was used in login.js within the jsx as custom background video recurring in loop
- [The video loop attribute](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video_loop) Code was modified by including the video source using default react formats.

## Acknowledgments

* Format and structure source :[Reactjs complete guide] (https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8109004?start=195#content)
* Inspired from Brightspace : (https://dal.brightspace.com/)

## References

### Quiz.js
 - DummyText(Lorem-ipsum) = https://www.blindtextgenerator.com/lorem-ipsum 

### Login.js
 - Style reference : https://www.youtube.com/watch?v=05ZHUuQVvJM 
 - Video Source : https://pixabay.com/videos/letters-fonts-alphabet-matrix-5157/?fbclid=IwAR1tn3FNQmtJjdbrvKMZtOa-ujgopRJmyXEsna-AJySfD2y8JmRKLnAKLFQ

### index.js
 - Source for font-awesome : https://fontawesome.com/v3.2.1/get-started/
 - Source for css and bottstrap : //netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css
