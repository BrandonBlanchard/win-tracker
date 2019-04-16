import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { fetchData } from './classes/fetch-data';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import { Header } from './header';
import { PieChart } from './player-faction-chart';
import { WinRate } from './win-rate';
import { extractFactions, extractFactionWins, extractPlayerWins } from './classes/extractors';
import ChartWidget from './chart-widget';

const dataSource = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6B-jLNFVOaHlagYjsClKUDGquAkZpCymnDQ60n5wOw-0pf8gRImDXKciW7FzLZbK4rZutfQjPfVSM/pub?output=csv';

const LOAD_STATE = {
  INIT: 0,
  LOADING: 1,
  READY: 2
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readiness: LOAD_STATE.INIT,
      data: null,
      factions: [],
      factionWins: [],
      playerWins: []
    };
  }

  componentDidMount() {
    if (this.state.readiness === LOAD_STATE.INIT) {
      fetchData(dataSource, (data) => {
        this.setState({
          readiness: LOAD_STATE.READY,
          data,
          factions: extractFactions(data),
          factionWins: extractFactionWins(data),
          playerWins: extractPlayerWins(data)
        });
      });

      this.setState({ readiness: LOAD_STATE.LOADING });
    }
  }

  renderOnReady() {
    return (
      <div className='charts-container'>
        <ChartWidget chartName="Games by Faction" key={0}>
          <PieChart data={this.state.factions} width={400} height={400} ></PieChart>
        </ChartWidget>
        <ChartWidget chartName="Wins by Faction" key={1}>
          <PieChart data={this.state.factionWins} width={400} height={400} ></PieChart>
        </ChartWidget>
        <ChartWidget chartName="Wins by Player">
          <PieChart data={this.state.playerWins} width={400} height={400}></PieChart>
        </ChartWidget>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <Header></Header>
        {this.state.readiness === LOAD_STATE.READY && this.renderOnReady()}
        <div className="content">
          <h3 className="content-header">Game Data</h3>
          {this.state.readiness === LOAD_STATE.READY && <PivotTableUI {...this.state} onChange={s => this.setState(s)} />}
        </div>
      </div>
    );
  }
}

export default App;
