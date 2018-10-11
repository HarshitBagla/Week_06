import React, { Component } from "react";

class About extends React.Component {
  onChange = (event) => {
    this.setState({term: event.target.value});
  }



  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term:'',
      items: [...this.state.items, this.state.term]
    });
  }


  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
      <div><input value={this.state.term} onChange={this.onChange} /></div>
      <div>
        <form className="About" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default About;
