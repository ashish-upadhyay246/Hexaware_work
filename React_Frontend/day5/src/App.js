import './App.css';
const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { c: 0 };
  }

  add = () => {
    if (this.state.c === 10) {
      this.setState({ c: 0 });
    } else {
      this.setState({ c: this.state.c + 1 });
    }
  };

  sub = () => {
    if (this.state.c === 0) {
      this.setState({ c: 10 });
    } else {
      this.setState({ c: this.state.c - 1 });
    }
  };

  render() {
    return (
      <>
        <h1>{this.state.c}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>sub</button>
      </>
    );
  }
}

export default App;
