import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Class Component children= {this.props.children}</h1>
        <h1>
          name : {this.props.name}
          age : {this.props.age}
        </h1>
      </div>
    );
  }
}

export default Welcome;
