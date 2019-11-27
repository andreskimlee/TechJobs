import { connect } from 'react-redux'   
import React from "react";
import {withRouter, Route} from 'react-router-dom'

class FeatJobs extends React.Component { 
      constructor(props) {
            super(props) 
            this.props = props 
      }

      render () {
            return (
                  <div className="feat-jobs-container">
            <h1 className="feat-job-text">Featured Jobs</h1>
            <div className="feat-job-1">
                 <div className="job-posting">
                 <div className="title-4-job">{this.props.jobs[0].title } <div className="company-name">{this.props.jobs[0].company + " " + " - "}<div>&nbsp;</div><div className="type">{" " + this.props.jobs[0].type}</div></div></div>
                  
                  <div>
                  </div>
                  <div className="location-created">
                  <div className="location">{this.props.jobs[0].location}</div>
                  <div className="created_at">{this.props.jobs[0].created_at.slice(0,11)}</div>
                  </div>
                  </div>
            </div>

            <div className="feat-job-1">
                 <div className="job-posting">
                 <div className="title-4-job">{this.props.jobs[2].title} <div className="company-name">{this.props.jobs[2].company + " " + " - "}<div>&nbsp;</div><div className="type">{" " + this.props.jobs[2].type}</div></div></div>
                  
                  <div>
                  </div>
                  <div className="location-created">
                  <div className="location">{this.props.jobs[2].location}</div>
                  <div className="created_at">{this.props.jobs[2].created_at.slice(0,11)}</div>
                  </div>
                  </div>
            </div>
                  
            </div>
            )
      }
}

const mapStateToProps = ({ entities: { jobs }}) => {     
      return {
        jobs
      };
    };
  
    
    const mapDispatchToProps = dispatch => ({
         
    })
    
    export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FeatJobs))

  
  
  