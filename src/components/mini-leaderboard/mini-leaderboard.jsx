import React, { useState, useEffect } from 'react';
import './mini-leaderboard.css';


const byWins = (a, b) => {
    const aWins = a.wins;
    const bWins = b.wins;

    if(aWins > bWins) return -1;
    if(aWins < bWins) return 1;
    return 0;
};


const onWins = (player) => player.wins > 2 && player.player != 'Some rando'; 


const extractPlayers = (players) => {
    const sortedPlayers = players.filter(onWins)
                                 .sort(byWins);

    const leader = sortedPlayers[0];
    const rabble = sortedPlayers.slice(1, sortedPlayers.length);
    
    return {leader, rabble};
};

const numberStringMap = {
    2: '2nd',
    3: '3rd',
    4: '4th',
    5: '5th',
    6: '6th'
}

export const MiniLeaderboard = (props) => {
    const {leader, rabble} = extractPlayers(props.players); 
    const leaderStats = [
        { label: 'Wins', stat: leader.wins },
        { label: 'W/L Ratio', stat: (leader.wins/leader.games).toFixed(2)},
        { label: 'Games', stat: leader.games}
    ];

    return (
        <ul className='mini-leaderboard'>
            <li className='mini-leaderboard__leader'>
                <i className='fa fa-crown mini-leaderboard__leader-crown'></i>
                <p className='mini-leaderboard__leader-name'>{ leader.player }</p>
                <p className='mini-leaderboard__leader-faction'>{ leader.faction }</p>
                <div className='mini-leaderboard__leader-stats'>
                    {
                        leaderStats.map(set => (
                            <div className='mini-leaderboard__leader-stat'>
                                <p className='leader-stat__label'>{set.label}</p>
                                <p className='leader-stat__value'>{set.stat}</p>
                            </div>
                        ))
      
                    }
                    
                  
                </div>
            </li>
            {
                rabble.map( ({ player, faction, wins, games}, i) => (
                    <li className='mini-leaderboard__player'>
                        <div className='mini-leaderboard__player-dot'> { player } </div>
                        <div className='mini-leaderboard__player-faction'>{ faction }</div>
                        <div className="mini-leaderboard__player-wins">{numberStringMap[i + 2]}</div>
                    </li>
                ))
            }
        </ul>
    )   ;
};

