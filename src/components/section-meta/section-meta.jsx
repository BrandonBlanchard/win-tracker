import React, { useEffect, useState } from 'react';
import { ChartCard } from '../chart-widget';
import { PieChart } from './../pie-chart';
import { MiniLeaderboard } from './../mini-leaderboard';
import './index.css';

const layout = {
  font: {
    color: '#728041',
    family: 'sans serif'
  }
};

// Faction Games
const computeFactionChart = (factionEntries, setFactionChart) => {
    const trimmedFactions = factionEntries.filter( item => (item.wins > 2));

    const factionNames = trimmedFactions.map(entry => entry.faction);
    const factionWins = trimmedFactions.map(entry => entry.games);

    setFactionChart([{
      type: 'pie',
      labels: factionNames,
      values: factionWins,
      domain: { column: 0 },
      hole: .96,   
      textinfo: 'label+value',
    }]);
};

// Player wins
const computePlayerChart = (playerEntries, setPlayerChart) => {
  // Filter out players with only 1 or 2 games and any randos
  const trimmerPlayers = playerEntries.filter( player => (player.games > 2) && player.player !== 'Some rando');

  const playerNames = trimmerPlayers.map(player => player.player);
  const playerWins = trimmerPlayers.map(player => player.wins);

  setPlayerChart([{
    type: 'pie',
    labels: playerNames,
    values: playerWins,
    domain: {column: 1},
    hole: 0.96,
    textinfo: 'label+value'
  }])
}

export default (props) => {
  const { factions, players } = props.data;

  const [factionChart, setFactionChart] = useState([]);
  const [playerChart, setPlayerChart] = useState([]);
  const chartSize = 330;

  useEffect(() => computeFactionChart(factions, setFactionChart), [factions]);
  useEffect(() => computePlayerChart(players, setPlayerChart), [players]);

  return (
    <div className='meta-stats'>
      <ChartCard chartName="Faction Games" key={0}>
        <PieChart data={factionChart} layout={layout} width={chartSize} height={chartSize} ></PieChart>
      </ChartCard>

      <MiniLeaderboard players={players}></MiniLeaderboard>

      <ChartCard chartName="Player Wins" key={0}>
        <PieChart data={playerChart} layout={layout} width={chartSize} height={chartSize} ></PieChart>
      </ChartCard>
    </div>
  );
}