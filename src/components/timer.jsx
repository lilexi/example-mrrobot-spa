import React, { Component } from "react";

export default class timer extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      seconds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    let now = new Date().getTime();
    let t = this.deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    this.setState({ days, minutes, hours, seconds });
    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date("oct 06, 2019 22:00:00").getTime();
    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div className="timer">
        <center>
          {days} days {hours} hours {minutes} min {seconds} sec
        </center>
      </div>
    );
  }
}
