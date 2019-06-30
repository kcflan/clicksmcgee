import React, { Component } from 'react';
import McGeeCard from './components/ClickCard/ClickCard';
import Wrapper from './components/GameCard/GameCard';
import NavBar from './components/Header/Header';
import mcgees from './mcgees.json';
import './App.css';

class App extends Component {
  state = {
    mcgees,
    count: 0,
    message: "Don't click the same image twice! Been Warned.",
    highScore: 0,
    lose: false
  };

  shuffleMcGees = () => {
    return this.state.mcgees.sort(() => Math.random() - 0.5);
  };

  clickedOrNot = id => {
    let { mcgees, count, message, highScore, lose } = this.state;

    mcgees = this.shuffleMcGees();
    console.log(id);
    for (let i in mcgees) {
      if (mcgees[i].id === id) {
        if (mcgees[i].clicked) {
          count = 0;
          message = `Nope! You already clicked ${mcgees[i].name.toUpperCase()}!`;
          lose = true;
          this.resetGame();
        } else {
          count++;
          message = 'Keep going!';
          mcgees[i].clicked = true;
          lose = false;
          if (count > highScore) {
            highScore = count;
            message = 'New High Score!';
          }
        }
      }
    }

    this.setState({
      mcgees,
      count,
      message,
      highScore,
      lose
    });
  };

  resetGame = () => {
    for (let i in mcgees) {
      mcgees[i].clicked = false;
    }
    this.setState({ mcgees, count: 0 });
  };

  render() {
    return (
      <div>
        <NavBar lose={this.state.lose} counter={this.state.count} high_score={this.state.highScore} message={this.state.message} />
        <Wrapper>
          {this.state.mcgees.map(mcgee => (
            <McGeeCard
              id={mcgee.id}
              key={mcgee.id}
              mcgees={this.state.mcgees}
              name={mcgee.name}
              image={mcgee.image}
              clicked={mcgee.clicked}
              clickedOrNot={this.clickedOrNot}
              lose={this.state.lose}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
