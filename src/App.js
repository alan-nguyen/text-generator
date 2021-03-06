import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: '',
    };
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios
      .get(
        `http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}`
      )
      .then((response) => {
        this.setState({ text: response.data.text }, function () {
          console.log(this.state);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        Hello
        <p></p>
      </div>
    );
  }
}

export default App;
