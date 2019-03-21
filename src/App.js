import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {fetchData} from './classes/fetch-data';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import { Header } from './header';
import { PlayerFactionChart } from './player-faction-chart';
import { WinRate } from './win-rate';
import {extractorFactions, extractFactions} from './classes/extractors';

const dataSource = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6B-jLNFVOaHlagYjsClKUDGquAkZpCymnDQ60n5wOw-0pf8gRImDXKciW7FzLZbK4rZutfQjPfVSM/pub?output=csv';

const LOAD_STATE = {
  INIT: 0,
  LOADING: 1,
  READY: 2
};

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      readiness: LOAD_STATE.INIT,
      data: null,
      factions: [],
      winRates: []
    };
  }

  componentDidMount () {
    if(this.state.readiness === LOAD_STATE.INIT) {
      fetchData(dataSource, (data) => {
        this.setState({
          readiness: LOAD_STATE.READY, 
          data,
          factions: extractFactions(data)
        });
      });

      this.setState({readiness: LOAD_STATE.LOADING});
    }
  }

  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className='sub-header'>
        { this.state.readiness === LOAD_STATE.READY && 
          <WinRate></WinRate> }
        { this.state.readiness === LOAD_STATE.READY && 
          <PlayerFactionChart data={this.state.factions} width={550} height={450} ></PlayerFactionChart>}
        </div>
        <div className="content">
          <h3 className="content-header">Game Data</h3>

          { this.state.readiness === LOAD_STATE.READY && <PivotTableUI {...this.state} onChange={s => this.setState(s)}/>}
        </div>
      </div>
    );
  }
}

export default App;
