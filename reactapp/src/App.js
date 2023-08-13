import React, { Component } from "react";
import Button from "./components/UI/Button/Button"; // Assuming you have a Button component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizStarted: false,
      showResults: false
    };
  }

  startQuiz = () => {
    this.setState({
      quizStarted: true
    });
  };

  showResults = () => {
    this.setState({
      showResults: true
    });
  };

  render() {
    return (
      <div>
        <h1>Quizz App</h1>
        {!this.state.quizStarted && (
          <button onClick={this.startQuiz}>Start Quiz</button>
        )}
        {this.state.quizStarted && !this.state.showResults && (
          // Render the quiz questions here
          <Button onClick={() => { /* Handle question logic */ }}>
            Question
          </Button>
        )}
        {this.state.quizStarted && this.state.showResults && (
          <button onClick={this.showResults}>Show Results</button>
        )}
      </div>
    );
  }
}

export default App;
