import React from "react";
import { Link } from 'react-router-dom'
import {withRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchJob} from '../../actions/user_actions'   

class ShowJobs extends React.Component {
    constructor(props) {
        super(props) 
        this.props = props  
    }   

    componentDidMount() {
        this.props.fetchJob(this.props.match.params.jobId) 
    }


    
    render () {  
        if (!this.props.jobs) {
            return null 
        }
        return (
            <div className="feat-jobs-container">
                hello 
            </div>

            
        )
    }
}

const mapStateToProps = ({ entities: { job }}) => {     
    return {
      job
    };
  };

  
  const mapDispatchToProps = dispatch => ({
       fetchJob: (jobId) => dispatch(fetchJob(jobId))
  })
  
  export default (connect(mapStateToProps,mapDispatchToProps)(ShowJobs))
