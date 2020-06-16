import React from 'react';
import classes from './Instructions.css';

//DummyText(Lorem-ipsum) = https://www.blindtextgenerator.com/lorem-ipsum

const instructions = (props) => (
    <section className={classes.instructionsContainer}>
        <article className="row">
            <div className="col-lg-3 col-md-3 col-sm-hidden col-xs-hidden">

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className={classes.instructionContent}>
                    <div className={classes.heading}>Instructions Page</div>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</li>
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
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-hidden col-xs-hidden">

            </div>
            
            
        </article>
        
        
    </section>
);

export default instructions;