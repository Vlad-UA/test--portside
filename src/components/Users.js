// Core
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Users extends PureComponent {
  async componentDidMount() {
    const { getUsers } = this.props;

    await getUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <>
        {users.map(({ name, id }) => <div key={id}><Link to={`/user/${id}`}>{name}</Link></div>)}
      </>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};
