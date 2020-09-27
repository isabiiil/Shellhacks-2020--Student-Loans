import React from "react";
import { Slider } from "shards-react";
import "./Calculator.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlide = this.handleSlide.bind(this);
    this.state = { value: 1300 };
  }

  handleSlide(e) {
    this.setState({
      value: parseFloat(e[0])
    });
  }

  render() {
    return (
      <div className="Calc">
        <p>Value: {this.state.value}</p>
        <Slider
          pips={{ mode: "steps", stepped: true, density: 3 }}
          onSlide={this.handleSlide}
          connect={[true, false]}
          start={[this.state.value]}
          range={{ min: 0, max: 2500 }}
        />
      </div>
    );
  }
}