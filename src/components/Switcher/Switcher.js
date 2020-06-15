import React from 'react';
import classes from './Switcher.css';
const switcher = (props) => (
    <section>
        <article className={classes.userDetails}>
            <span className={classes.userName}>Welcome {props.currentUser.username}</span>
            {/* Bootstrap button : https://www.w3schools.com/bootstrap/bootstrap_buttons.asp */}
            <button className="btn btn-primary" onClick={props.logout}> Logout</button>
            <hr/>
        </article>
    </section>
);

export default switcher;