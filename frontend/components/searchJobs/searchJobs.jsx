import React from "react";
import { Link } from 'react-router-dom'
import {withRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'   
import ShowJob from '../../components/show_job_page/show_job'

class SearchJobs extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { moreJobs: "none"} // because set to null put a if condition to append only if not null. 
        this.props = props 
        
    }   

    componentDidMount() {
        if (Object.values(this.props.jobs).length === 50) { 
            this.setState({ moreJobs: "block"})
        } else {
            this.setState({ moreJobs: "none"})
        }
    }

    componentDidUpdate(prevProps) {
        if (Object.values(prevProps.jobs).length !== Object.values(this.props.jobs).length) { 
            if (Object.values(this.props.jobs).length === 50) { 
           this.setState({ moreJobs: "block"})
        } else {
            this.setState({ moreJobs: "none"})
        }
        }
    }




                    
    render () {  
        if (!this.props.jobs) {
            return null;    
        }
         
        let searchedJobs = Object.values(this.props.jobs).map((job, idx)=> { 
            return (
                <div key={idx}>
                 <div className="feat-job-1">
                 <div className="job-posting">
                 <Link className="link-to-show-page" to={`/allJobs/${job.id}`}><div className="title-4-job">{job.title} <div className="company-name">{job.company + " " + " - "}<div>&nbsp;</div><div className="type">{" " + job.type}</div></div></div></Link>
                 
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
            <div>
                <div className="feat-jobs-container">
    <h1 className="feat-job-text">Showing {Object.values(this.props.jobs).length} Jobs</h1>
                    {searchedJobs}
                   
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
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchJobs))





