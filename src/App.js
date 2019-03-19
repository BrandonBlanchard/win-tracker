import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {fetchData} from './classes/fetch-data';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

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
      data: null
    };
  }

  componentDidMount () {
    if(this.state.readiness === LOAD_STATE.INIT) {
      fetchData(dataSource, (data) => {
        this.setState({
          readiness: LOAD_STATE.READY, 
          data
        })
      });

      this.setState({readiness: LOAD_STATE.LOADING});
    }
  }

  render() {
    return (
      <div className="app">
      <div className="header">Turn 2 Smoke Break Game Data</div>
        { this.state.readiness === LOAD_STATE.READY && <PivotTableUI {...this.state} onChange={s => this.setState(s)}/>}
      </div>
    );
  }
}

export default App;
