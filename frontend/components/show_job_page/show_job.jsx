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
        if (!this.props.job) {
            return null 
        }
        return (
            <div className="feat-jobs-container">
                <div className="location-type">{this.props.job.type + " / " + this.props.job.location }</div>
                <div className="position-show-page">{this.props.job.title}</div>
                <div className="container-4-desc">
                    <div className="description-txt">
                    <td  dangerouslySetInnerHTML={{__html: this.props.job.description}} />
                    </div>
                    <div className="apply-container">
                        <div className="outer-box">
                        <div className="company">
                          <div className="company-text">{this.props.job.company}</div>
                          <img className="comp-logo" src={this.props.job.company_logo} alt=""/>
                          <a className="comp-url" href={this.props.job.company_url}>{this.props.job.company_url}</a>
                        </div>
                        </div>
                        <div className="outer-box">
                            <div className="apply-cont">
                                <div className="company-text">How to apply</div>
                                <td className="comp-url" dangerouslySetInnerHTML={{__html: this.props.job.how_to_apply}} />

                            </div>
                        </div>
                    </div>
                </div>
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
