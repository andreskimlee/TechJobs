import React from 'react';
import searchJobs from '../searchJobs/searchJobs'
import NavBar from "../NavBar/Nav"
import { Route, Link } from 'react-router-dom'
import FeatJobs from '../../components/featured_jobs/featured_jobs'



class Greeting extends React.Component {
    constructor(props) {
      super(props)
      this.props = props 
      this.state = {
        description: "",
        location: "", 
        fullTime: false
      }
    }

    componentDidMount() {
      this.props.fetchAllJobs()
    }

    handleChange4Check(e) {
      this.setState({ fullTime: e.target.value})
    }

    handleChange(e) {
      this.setState({ description: e.target.value}) 
    }

    handleChange4Location(e) {
      this.setState({ location: e.target.value})
    }

    submitSearch(e) {
      this.props.searchJobs({description: this.state.description, location: this.state.location, fullTime: this.state.fullTime}).then(this.props.history.push('/allJobs'))
    }

    render () {
        
      if (Object.values(this.props.jobs).length === 0) {
        return null 
      }
    
      const sessionLinks = () => (
        <div className="login-signup">
          <div className="navhead">
         <a className="home-page" href="/"><div className="title-page">Tech <div className="lower-case-title">Jobs</div> </div></a>
          <Link className="all-jobs" to="/allJobs">All jobs</Link>
          </div>     
          <div className="page-container"> 
            <div className="search-container">
              <div className="job-description-container">
                <div className="job-description-text">Job Description</div>
                <input onChange={this.handleChange.bind(this)} className="description-inp" type="text" value={this.state.description} placeholder="Filter by title, benefits, companies, expertise"/>
              </div>  
              <div className="location-search-cont">
                <div className="job-location-text">Location</div>
                <input onChange={this.handleChange4Location.bind(this)} placeholder="Filter by city, state, zip code or country" className="location-inp"type="text"/>
              </div>
              <div className="checkbox-cont">
                <input type="checkbox" onChange={this.handleChange4Check.bind(this)}/>
                <div className="text-4-full-time">Full Time Only</div>
              </div>
              <button onClick={this.submitSearch.bind(this)} className="search-button">Search</button>
            </div>

            

          </div>
          
          <Route exact path={`/`} component={FeatJobs} props={this.props}/>
          <Route exact path={`/allJobs`} component={searchJobs} jobs={this.props.jobs}/>
        </div>
      );

      
      return ( 
        <div>{sessionLinks()}</div>
      )
    }

}


export default Greeting;
