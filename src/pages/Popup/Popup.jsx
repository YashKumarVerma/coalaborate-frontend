import React from 'react';
// import { DropDown } from './components/dropdown';

import { getCurrentUrl } from './util/urlExtractor';

class PopUp extends React.Component {
  constructor() {
    super();
    this.state = {
      url: undefined,
    };
  }

  async componentDidMount() {
    /** save current URL in application state */
    const url = await getCurrentUrl();
    this.setState({ url });
  }

  render() {
    return <div>{this.state.url}</div>;
  }
}

export default PopUp;
