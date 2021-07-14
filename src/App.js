import React, { Component } from "react";

import "./App.css";
import AddBalance from "./components/AddBalance";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";

export default class App extends Component {
  state = {
    count: 0,
    balance: [],
    income: 0,
    expanse: 0,
  };
  onSubmit = (e) => {
    let pos = 0;
    let neg = 0;

    this.state.balance.push({
      text: e.text,
      amount: e.amount,
      id: this.state.count++,
    });

    this.state.balance.forEach((bal) => {
      // map is used when we have to return the value
      // forEach doesn't require return
      if (+bal.amount >= 0) {
        pos += +bal.amount;
        this.setState({ income: pos });
      } else {
        neg += +bal.amount;
        this.setState({ expanse: neg });
      }
    });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Balance income={this.state.income} expanse={this.state.expanse} />
        <History balance={this.state.balance} />
        <AddBalance onSubmit={this.onSubmit} />
      </div>
    );
  }
}
