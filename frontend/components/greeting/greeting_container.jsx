import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { fetchAllJobs, searchJobs} from '../../actions/user_actions';

const mapStateToProps = ({ entities: { jobs } }) => {
  debugger 
  return {
    jobs 
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllJobs: () => dispatch(fetchAllJobs()), 
  searchJobs: (description, location, fullTime) => dispatch(searchJobs(description, location, fullTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

