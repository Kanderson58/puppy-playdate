import { Component } from "react";
import "./Slideshow.css"
import AtPark from "../AtPark/AtPark";

class Slideshow extends Component {
  constructor() {
    super();
    this.state = { 
      slides: ["hodgy1", "hodgy2"], 
      currentSlide: "hodgy1"
    };
  }
  
  componentDidMount = () => {
    window.addEventListener('load', () => {setInterval(this.handleChange, 5000)});
  }

  handleChange = () => {
    if(this.state.currentSlide === "hodgy2") {
      this.setState({ currentSlide: this.state.slides[0] });
    } else {
      this.setState({ currentSlide: this.state.slides[this.state.slides.indexOf(this.state.currentSlide) + 1] });
    }
  }

  render() {
    return (
      <div className="mySlides">
        <img className="mySlide" src={require(`../images/${this.state.currentSlide}.jpg`)} alt={`Picture of my puppy - ${this.state.currentSlide}`} />
        <AtPark />
      </div>
    )
  }
}

export default Slideshow;