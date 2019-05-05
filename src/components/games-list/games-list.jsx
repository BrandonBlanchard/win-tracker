import React from 'react';
import PropTypes from 'prop-types';
import './games-list.css';
import { spawn } from 'child_process';

const playerRenderer = ({ caster, controlPoints, faction, name, theme, win }) => (
    <tr className='games-list__player'>
            <td className='games-list__stat games-list__player-name'>
                <div className='games-list__win-loss'>
                    <i className={ win ? 'fa fa-trophy' : 'fa fa-skull-crossbones'}></i>
                </div>
                {name}
            </td>
            <td  className='games-list__stat'> { faction } </td>
            <td  className='games-list__stat'> { caster } </td>
            <td  className='games-list__stat'> { theme } </td>
            <td  className='games-list__stat--orange games-list__control-points'> { controlPoints || 0 } </td>
    </tr>
);

const gameRenderer = (game) => (
    <tr className="games-list__game">
        <table className='games-list__game-data'>
            {playerRenderer(game.player1, game.winCondition)}
            <td className='games-list__win-condition'>{ game.winCondition } </td>
            {playerRenderer(game.player2, game.winCondition)}
        </table>
    </tr>
);

const GamesList = (props) => {
    const { games } = props;

    console.log(games);

    return (
        <div className='games-list'>
            <h2 className='games-list__header'> Games </h2>
            <table className="games-list__games-list">
                {games.map(gameRenderer)}
            </table>
        </div>
    );
}

GamesList.propTypes = {
    games: PropTypes.array
};

GamesList.defaultProps = {
    games: []
}

export { GamesList };