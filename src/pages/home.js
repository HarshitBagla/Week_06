

import React, { Component } from "react";

class Home extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    term: '',
    items: []
  };
}
  render() {
    return ( <div>
        <h2>Home</h2>
      </div>
      <div>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default Home;
