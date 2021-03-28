import React from 'react';
// import { DropDown } from './components/dropdown';

import { cleanURL } from './util/cleaner';

class PopUp extends React.Component {
  constructor() {
    super();
    this.state = {
      url: undefined,
    };
  }

  componentDidMount() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      console.log(cleanURL(tabs[0].url));
      alert(cleanURL(tabs[0].url));
    });
  }

  render() {
    return <div>{this.state.url}</div>;
  }
}

export default PopUp;
