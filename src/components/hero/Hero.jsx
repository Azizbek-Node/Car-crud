import React, { Component } from "react";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      show: false,
      data: null,
    };
    this.handleReset = this.handleReset.bind(this);
  }
  handleClick(p) {
    alert("class app" + p);
  }
  handleReset() {
    this.setState({ count: 0 });
  }
  handleShow() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <h2>
          {this.props.title} {this.state.count}
        </h2>
        ;
        <button
          className="border"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment
        </button>
        <button
          disabled={this.state.count <= 0}
          className="border disabled:bg-slate-200"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decrement
        </button>
        {!!this.state.count && (
          <button className="border" onClick={this.handleReset}>
            Reset
          </button>
        )}
        <button onClick={() => this.handleClick(6)}>click</button>
        <br />
        <button onClick={() => this.handleShow()}>
          Show {this.state.show ? "less" : "more "}
        </button>
        {this.state.show && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias
            sapiente eum ducimus voluptatibus odit! Sint, nam. Sed earum
            voluptatibus, vel tempora officiis magni soluta omnis error
            molestias incidunt id!
          </p>
        )}
      </div>
    );
  }
}
