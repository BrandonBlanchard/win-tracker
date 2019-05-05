import React from 'react';
import './player-thumb.css';


const PlayerThumb = (props) => {
    const { player, faction, games, wins, controlPoints} = props.player;
    
    return (
        <div className='player-thumb'>
            <div className='player-thumb__content'>
                <div className='player-thumb__name'>{ player }</div>
                <div className='player-thumb__faction'>{ faction }</div>
                <hr/>
                <ul className='player-thumb__stats'>
                    <li>
                        <span className='player-thumb__label'>Wins</span>
                        <span className='player-thumb__value'>{ wins }</span>
                    </li>

                    <li>
                        <span className='player-thumb__label'>W/L Ratio</span>
                        <span className='player-thumb__value'>{ (wins/games).toFixed(2) }</span>
                    </li>

                    <li>
                        <span className='player-thumb__label'>Games</span>
                        <span className='player-thumb__value'>{ games }</span>
                    </li>

                    <li>
                        <span className='player-thumb__label'> lifetime control</span>
                        <span className='player-thumb__value'>{controlPoints}</span>
                    </li>

                    <li>
                        <span className='player-thumb__label'> control per game</span>
                        <span className='player-thumb__value'>{ (controlPoints/games).toFixed(2) }</span>
                    </li>
                </ul>
            </div>
        </div>
    );
} 


export { PlayerThumb };