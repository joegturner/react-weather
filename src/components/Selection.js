import React, { Component } from "react";

class Selection extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => this.props.getData("New York")}
          style={{ margin: "2%" }}
        >
          New York
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => this.props.getData("Portland")}
          style={{ margin: "2%" }}
        >
          Portland
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => this.props.getData("Tokyo")}
          style={{ margin: "2%" }}
        >
          Tokyo
        </button>
      </div>
    );
  }
}

export default Selection;
