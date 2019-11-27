import { connect } from 'react-redux'   
import React from "react";
import {withRouter, Route} from 'react-router-dom'
import {searchJobs} from '../../actions/user_actions'

class FeatJobs extends React.Component { 
      constructor(props) {
            super(props) 
            this.props = props 
      }

      handlePopLang(e) {
            e.preventDefault(e) 
            debugger 
                  switch (true) {
                        case (e.target.className === "pop-1") :
                              this.props.searchJobs({description: "PHP"}).then(this.props.history.push('/allJobs'))
                              break;
                        case (e.target.className === "pop-2") :
                               this.props.searchJobs({description: "Rails"}).then(this.props.history.push('/allJobs'))
                              break;
                        case (e.target.className === "pop-3") :
                              this.props.searchJobs({description: "Python"}).then(this.props.history.push('/allJobs'))
                              break;
                        case (e.target.className === "pop-4") :
                              this.props.searchJobs({description: "Javascript"}).then(this.props.history.push('/allJobs'))
                              break;
                        case (e.target.className === "pop-5") :
                              this.props.searchJobs({description: "Scala"}).then(this.props.history.push('/allJobs'))
                              break;
                        case (e.target.className === "pop-6") :
                              this.props.searchJobs({description: "Android"}).then(this.props.history.push('/allJobs'))
                              break;
                        case (e.target.className === "pop-7") :
                              this.props.searchJobs({description: "iOS"}).then(this.props.history.push('/allJobs'))
                              break;
                        case (e.target.className === "pop-8") :
                              this.props.searchJobs({description: "Linux"}).then(this.props.history.push('/allJobs'))
                              break;   
                        case (e.target.className === "pop-9") :
                              this.props.searchJobs({description: "Erlang"}).then(this.props.history.push('/allJobs'))
                              break;   
                        case (e.target.className === "pop-10") :
                              this.props.searchJobs({location: "San Francisco"}).then(this.props.history.push('/allJobs'))
                              break;   
                        case (e.target.className === "pop-11") :
                              this.props.searchJobs({location: "New York City"}).then(this.props.history.push('/allJobs'))
                              break;    
                        case (e.target.className === "pop-12") :
                              this.props.searchJobs({location: "Austin TX"}).then(this.props.history.push('/allJobs'))
                              break;         
                        case (e.target.className === "pop-13") :
                              this.props.searchJobs({location: "London"}).then(this.props.history.push('/allJobs'))
                              break;
                        case (e.target.className === "pop-14") :
                             this.props.searchJobs({location: "Europe"}).then(this.props.history.push('/allJobs'))
                             break;                
                        default:
                              break;
                  }
            
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
                  <h1 className="feat-job-text">Hot Searches</h1>  
                  <div className="popular-languages">
                        <div  onClick={this.handlePopLang.bind(this)} className="pop-1">PHP</div> · <div onClick={this.handlePopLang.bind(this)} className="pop-2"> Rails</div> · <div  onClick={this.handlePopLang.bind(this)} className="pop-3">Python</div> · <div  onClick={this.handlePopLang.bind(this)} className="pop-4">JavaScript</div> · <div  onClick={this.handlePopLang.bind(this)} className="pop-5"> Scala</div> · <div onClick={this.handlePopLang.bind(this)} className="pop-6">Android</div>· <div onClick={this.handlePopLang.bind(this)} className="pop-7">iOS </div>· <div  onClick={this.handlePopLang.bind(this)} className="pop-8">Linux </div>· <div  onClick={this.handlePopLang.bind(this)} className="pop-9">Erlang</div>
                  </div>
                  <div className="pop-locations">
                  <div  onClick={this.handlePopLang.bind(this)} className="pop-10">San Francisco</div> · <div onClick={this.handlePopLang.bind(this)} className="pop-11"> New York</div> · <div  onClick={this.handlePopLang.bind(this)} className="pop-12">Austin, TX</div> · <div  onClick={this.handlePopLang.bind(this)} className="pop-13">London</div> · <div  onClick={this.handlePopLang.bind(this)} className="pop-14"> Europe</div>
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
      searchJobs: (description, location, fullTime) => dispatch(searchJobs(description, location, fullTime))
    })
    
    export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FeatJobs))

  
  
  