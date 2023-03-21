import { Component } from 'react';
import './App.css';
import Slideshow from '../Slideshow/Slideshow';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main className="App">
        <Header />
        <Slideshow />
      </main>
    )
  };
}

export default App;