import React, {Component} from 'react';

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '10%',
  fontFamily: 'Roboto, sans-serif',
};

const marginStyle = {
  marginTop: '1em',
};

class MyComponent extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      output: '',
    };
  }

  setOutput() {
    this.setState({output: `Hello ${this.state.name}`})
  };

  render() {
    return (
      <div style={pageStyle}>
        <label>Enter your name:</label>
        <input onChange={(e) => this.setState({name: e.target.value})}/>
        <button style={marginStyle}
                onClick={() => this.setOutput()}>
          Say hello
        </button>
        <div style={marginStyle}>{this.state.output}</div>
      </div>
    )
  }
}

export default MyComponent;