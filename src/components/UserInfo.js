// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class UserInfo extends PureComponent {
  async componentDidMount() {
    const { getUserInfo, match: { params: { userId } } } = this.props;
    await getUserInfo(userId);
  }

  render() {
    const { userInfo: { name, email } } = this.props;

    return (
      <div>{name}-{email}</div>
    );
  }
}

UserInfo.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }).isRequired,
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
