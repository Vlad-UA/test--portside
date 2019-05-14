// Core
import React, { PureComponent } from 'react';

// Utils

// Components

// Constants

// Instruments

export default class NewComponent extends PureComponent {
  async componentDidMount() {
    const { getUserInfo, match: { params: { userId } } } = this.props;
    await getUserInfo(userId);
  }

  render() {
    const { userData: {name, email } } = this.props;

    return (
      <div>{name} {email}</div>
    );
  }
}
