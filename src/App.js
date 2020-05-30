import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div>
          Phone Directory
        </div>
        <button> Add </button><br/>
        <div>
          <span> Name </span><br/>
          <span> Phone </span>
        </div> */}
        <label htmlFor> Name:</label>
        <input type="text" defaultValue="name" placeholder="name here"></input>
      </div>
      );
  }
}

export default App;
