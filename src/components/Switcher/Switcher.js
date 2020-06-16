import React from 'react';
import classes from './Switcher.css';
const switcher = (props) => (
    <section>
        <article className={classes.userDetails}>
            <div className={classes.title}>
                Quiz-Room
            </div>
            <div className={classes.userName}>Welcome {props.currentUser.username} <i className="icon-user"></i></div>
            {/* Bootstrap button : https://www.w3schools.com/bootstrap/bootstrap_buttons.asp */}
            <div className={classes.logout}>
                <button className="btn btn-primary" onClick={props.logout}> Logout</button>
            </div>
            
        </article>
    </section>
);

export default switcher;