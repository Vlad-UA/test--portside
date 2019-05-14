// Core
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import UserInfo from '../components/UserInfo';

// Actions
import { getUserInfo } from '../actions/userInfo';

const mapStateToProps = state => ({
  userInfo: state.userInfo,
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
