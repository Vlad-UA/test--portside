// Core
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// Utils

// Components

// Constants

// Instruments

export default class Users extends PureComponent {
  async componentDidMount() {
    const { getUsers } = this.props;

    await getUsers();
  }

  render() {
    const { users } = this.props;

    console.log('users__', users);

    return (
      <>
        {users.map(({ name, id }) => <div key={id}><Link to={`/user/${id}`}>{name}</Link></div>)}
      </>
    );
  }
}
