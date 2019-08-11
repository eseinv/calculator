import React from "react";
import { CalcScreen } from "./calc-screen";
import { CalcButton } from "./calc-button";
import "./App.css";

class Calculator extends React.Component {
  state = { screen: "0", buffer: 0, operation: "" };

  clearScreen = () => {
    return this.setState({ screen: "0" });
  };

  handleNumClick = num => {
    if (parseInt(this.state.screen) === 0) {
      return this.setState({ screen: num });
    }
    return this.setState({ screen: this.state.screen + num });
  };

  handleOperClick = operation => {
    this.setState({
      buffer: parseInt(this.state.screen),
      operation,
      screen: "0"
    });
  };

  handleEqualClick = () => {
    if (this.state.operation === "mul") {
      return this.setState({
        screen: this.state.buffer * parseInt(this.state.screen),
        operation: "",
        buffer: 0
      });
    } else if (this.state.operation === "div") {
      return this.setState({
        screen: this.state.buffer / parseInt(this.state.screen),
        operation: "",
        buffer: 0
      });
    } else if (this.state.operation === "sub") {
      return this.setState({
        screen: this.state.buffer - parseInt(this.state.screen),
        operation: "",
        buffer: 0
      });
    } else if (this.state.operation === "add") {
      return this.setState({
        screen: this.state.buffer + parseInt(this.state.screen),
        operation: "",
        buffer: 0
      });
    }
  };

  render() {
    console.log("screen:", this.state.screen);
    console.log("buffer:", this.state.buffer);
    console.log("operation:", this.state.operation);
    console.log("---------------------");
    return (
      <div className="calc-container">
        <div className="calc-screen">
          <CalcScreen screen={this.state.screen} />
        </div>
        <div className="calc-buttons">
          <CalcButton
            onClick={this.clearScreen}
            cn="btn-clear s3-4"
            symbol="clear"
          />
          <CalcButton
            operation="mul"
            onClick={this.handleOperClick}
            cn="btn-math s1-4"
            symbol="×"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="7"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="8"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="9"
          />
          <CalcButton
            operation="div"
            onClick={this.handleOperClick}
            cn="btn-math s1-4"
            symbol="÷"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="4"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="5"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="6"
          />
          <CalcButton
            operation="sub"
            onClick={this.handleOperClick}
            cn="btn-math s1-4"
            symbol="–"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="1"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="2"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s1-4"
            symbol="3"
          />
          <CalcButton
            operation="add"
            onClick={this.handleOperClick}
            cn="btn-math s1-4"
            symbol="+"
          />
          <CalcButton
            onClick={this.handleNumClick}
            cn="btn-num s3-4"
            symbol="0"
          />
          <CalcButton
            operation="eq"
            onClick={this.handleEqualClick}
            cn="btn-eq btn-math s1-4"
            symbol="="
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
