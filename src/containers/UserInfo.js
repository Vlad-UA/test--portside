// Core
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import UserInfo from '../components/UserInfo';

// Actions
import { getUserInfo } from '../actions/users';

const mapStateToProps = state => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getUserInfo,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfo);
