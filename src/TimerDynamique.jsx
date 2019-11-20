import React, { Component } from "react";
import "./TimerDynamique.css";
class TimerDynamique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
      start: false
    };
    setInterval(() => {
      if (this.state.start)
        this.setState({
          ms: this.state.ms + 1000,
          hh: parseInt(this.state.ms / 3600000),
          mm: parseInt((this.state.ms % 360000) / 60000),
          ss: parseInt(((this.state.ms % 360000) % 60000) / 1000)
        });
    }, 1000);
  }
  clicked = () =>
    this.setState({
      start: !this.state.start
    });
  reset = () => {
    this.setState({
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
      start:false
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">Hh</div>
          <div className="col">Mm</div>
          <div className="col">Ss</div>
        </div>

        <div className="row">
          <div className="col">{String(this.state.hh).padStart(2, "0")}:</div>
          <div className="col">{String(this.state.mm).padStart(2, "0")}:</div>
          <div className="col">{String(this.state.ss).padStart(2, "0")}</div>
        </div>
        <div className="btn-click">
          <button className="btn-start-pause" onClick={this.clicked}>
            {!this.state.start ? "Start" : "Pause"}
          </button>
          <button className="btn-start-pause" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TimerDynamique;

//Timer component
//STATE
// state={valeurCumulé, hh, mn, sec, isTheCounterRuning }
// setInterval(function(){
// ma tekhdem kan ma isTheCounterRuning is true
//valeurCumulé + 1000
//valuerCumulé =convert=> hh, mn, sec
//}, 1000)

//HANDLERS
//function ta3 e start/pause button -> te9leb el isTheCounterRuning

//RENDERING
//affichage mta3 hh,mn,sec
//button start/pause
//button reset
