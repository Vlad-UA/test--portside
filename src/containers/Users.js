// Core
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Users from '../components/Users';

// Actions
import { getUsers } from '../actions/users';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getUsers,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
