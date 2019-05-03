import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

import { fetchData } from './classes/fetch-data';
import 'react-pivottable/pivottable.css';
import { WelcomeMat } from './components/welcome-mat/welcome-mat';
import { dataLoad } from './actions/index';
import { SectionMeta } from './components/section-meta';


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
    };
  }


  componentDidMount() {
    if (this.state.readiness === LOAD_STATE.INIT) {

      fetchData(dataSource, (rawData) => {
        this.props.dispatch(dataLoad(rawData));

      }).then(() => { 
        this.setState({ readiness: LOAD_STATE.READY });
      });

      this.setState({ readiness: LOAD_STATE.LOADING });
    }
  }


  renderOnReady() {
    return (
      <div className='charts-container'>
        <SectionMeta {...this.props} />
      </div>
    );
  }


  render() {
    console.log(this.props)
    return (
      <div className="app">
        <WelcomeMat/>
        {this.props.data.players.length > 0 && this.renderOnReady()}
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.objectOf(PropTypes.array)
};

App.defaultProps = {
  data: {
    players: []
  }
}

const mapStateToProps = state => state;


const applicationEntry = connect(mapStateToProps)(App);


export default applicationEntry;
