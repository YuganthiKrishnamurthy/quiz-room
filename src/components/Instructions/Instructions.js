import React from 'react';
import classes from './Instructions.css';

//DummyText(Lorem-ipsum) = https://www.blindtextgenerator.com/lorem-ipsum

const instructions = (props) => (
    <section>
        <div className={classes.heading}>Instructions Page</div>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
        <div className={classes.instructionsButton}>
            {/* Bootstrap button : https://www.w3schools.com/bootstrap/bootstrap_buttons.asp */}
            <button type="button" className="btn btn-primary" onClick={props.next}>Next 
                <i className="icon-long-arrow-right"></i>
            </button>
        </div>
        
    </section>
);

export default instructions;