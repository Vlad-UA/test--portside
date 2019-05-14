// Core
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Hello from '../components/Hello';

// Actions
// import { signup, login } from '../actions/authenticationActions';

const mapStateToProps = state => ({
  // isAuthenticated: state.authentication.isAuthenticated,
  // error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    // signup,
    // login  ,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hello);
