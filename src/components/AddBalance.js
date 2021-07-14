import React, { Component } from "react";

export default class AddBalance extends Component {
  state = { text: "", amount: "" };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  };
  onClear = () => {
    this.setState({ text: "", amount: "" });
  };
  render() {
    return (
      <div>
        <h4>Add Balance</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Text</label>
            <input
              className="form-control w-100"
              name="text"
              value={this.state.text}
              onChange={(e) => this.changeHandler(e)}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control w-100"
              name="amount"
              value={this.state.amount}
              onChange={(e) => this.changeHandler(e)}
            />
          </div>
          <button className="btn btn-primary btn-block w-100 mt-4">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}
