import React from 'react';
import './players-list.css';

import { PlayerThumb } from './../player-thumb';

const PlayersList = (props) => {
    const { players } = props;
    return (
        <div className='players-list'>
            <h2 className='players-list__header'>Players</h2>
            <div className='players-list__players'>
                { players.map((player) => (<PlayerThumb key={ `${player.player}-${player.faction}-${player.wins}` } player={ player } />))}
            </div>
        </div>
    );
};

export { PlayersList }