import React from 'react';
import searchJobs from '../searchJobs/searchJobs'
import { Route, Link } from 'react-router-dom'
import FeatJobs from '../../components/featured_jobs/featured_jobs'
import ShowJob from '../../components/show_job_page/show_job'


class Greeting extends React.Component {
    constructor(props) {
      super(props)
      this.props = props 
      this.state = {
        description: "",
        location: "", 
        fullTime: false, 
        moreJobs: "none", 
        pages: 1
      }
    }

    moreJobs(e) {
      this.props.searchJobs({description: this.state.description, location: this.state.location, fullTime: this.state.fullTime, pages: this.state.pages +=1}).then(this.props.history.push('/allJobs'))
    }

    componentDidMount() {
      this.props.fetchAllJobs()
      if (Object.values(this.props.jobs).length === 50) { 
        this.setState({ moreJobs: "block"})
    } 
    }

    componentDidUpdate(prevProps) {
      if (Object.values(prevProps.jobs).length !== Object.values(this.props.jobs).length) {
           debugger 
          if (Object.values(this.props.jobs).length === 50) { 
         this.setState({ moreJobs: "block"})
      } else {
          this.setState({ moreJobs: "none"})
      }
      }
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
          <Route exact path={`/allJobs/:jobId`} component={ShowJob} />
          <button className={this.state.moreJobs} onClick={this.moreJobs.bind(this)} >More Awesome Jobs</button>
        </div>
        
      );

      
      return ( 
        <div>{sessionLinks()}</div>
      )
    }

}


export default Greeting;
