import React from 'react';
import classes from './Thankyou.css';
// https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/
const thankyou = (props) => (
    <section className={classes.thankyouContainer}>
        <article className="row">
            <div className="col-lg-3 col-md-3 col-sm-hidden col-xs-hidden">

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className={classes.thankyouContent}>
                    <div className={classes.heading}>Thank you</div>
                    <div className={classes.thankyouNote}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor
                    </div>
                    {/* https://getbootstrap.com/docs/4.0/components/tooltips/ */}
                    <div className={classes.certificateContents}>
                        <div className={classes.downloadCertificate} data-toggle="tooltip" title="Download a copy"><i class="icon-download"></i></div>
                        <button type="button" class="btn btn-primary">Send through Email</button>
                    </div>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-hidden col-xs-hidden">

            </div>
            
            
        </article>
        
    
    </section>
);

export default thankyou;