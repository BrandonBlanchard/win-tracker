import React from 'react';
import { ChartWidget } from '../chart-widget';
import { PieChart } from './../pie-chart';
import './index.css';

export default (props) => {
  return (
    <div className='section__meta'>
      {/* <ChartWidget chartName="Games by Faction" key={0}>
        <PieChart data={this.state.factions} width={400} height={400} ></PieChart>
      </ChartWidget>
      <ChartWidget chartName="Wins by Faction" key={1}>
        <PieChart data={this.state.factionWins} width={400} height={400} ></PieChart>
      </ChartWidget>
      <ChartWidget chartName="Wins by Player">
        <PieChart data={this.state.playerWins} width={400} height={400}></PieChart>
      </ChartWidget> */}
    </div>
  );
}