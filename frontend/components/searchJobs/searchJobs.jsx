import React from "react";
import { Link } from 'react-router-dom'
import {withRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'   

class SearchJobs extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { photoFile: null, dropDown: "false", user: "", profPhoto: ""} // because set to null put a if condition to append only if not null. 
        this.props = props 
        
    }   


    
                    
    render () {  
        if (!this.props.jobs) {
            return null;    
        }
        debugger 
        let searchedJobs = Object.values(this.props.jobs).map(job => {
            return (
                <div>
            
                 <div className="feat-job-1">
                 <div className="job-posting">
                 <div className="title-4-job">{job.title } <div className="company-name">{job.company + " " + " - "}<div>&nbsp;</div><div className="type">{" " + job.type}</div></div></div>
                  
                  <div>
                  </div>
                  <div className="location-created">
                  <div className="location">{job.location}</div>
                  <div className="created_at">{job.created_at.slice(0,11)}</div>
                  </div>
                  </div>
            </div>
            </div>
            )
        })
        return (
            
                <div className="feat-jobs-container">
    <h1 className="feat-job-text">Showing {Object.values(this.props.jobs).length} Jobs</h1>
                    {searchedJobs}
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
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchJobs))





