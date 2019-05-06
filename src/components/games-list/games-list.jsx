import React from 'react';
import PropTypes from 'prop-types';
import './games-list.css';

const playerRenderer = ({ caster, controlPoints, faction, name, theme, win }, index) => (
    <tr className='games-list__player' key={`${name}-${name}-${index}-player`}>
            <td className='games-list__stat games-list__player-name' key={0}>
                <div className='games-list__win-loss'>
                    <i className={ win ? 'fa fa-trophy' : 'fa fa-skull-crossbones'}></i>
                </div>
                {name}
            </td>
            <td  className='games-list__stat' key={1}> { faction } </td>
            <td  className='games-list__stat' key={2}> { caster } </td>
            <td  className='games-list__stat' key={3}> { theme } </td>
            <td  className='games-list__stat--orange games-list__control-points' key={4}> { controlPoints || 0 } </td>
    </tr>
);

const gameRenderer = (game, index) => (
    <div className="games-list__game" key={`${game.player1.player}-${game.player2.player}-${index}`}>
        <table className='games-list__game-data'>
           <tbody>
            {playerRenderer(game.player1, index)}
            <tr key={`${game.player1.player}-${game.player2.player}-${index}-condition`}>
                <td className='games-list__win-condition'>{ game.winCondition } </td>
            </tr>
            {playerRenderer(game.player2, index)}
           </tbody>
        </table>
    </div>
);

const GamesList = (props) => {
    const { games } = props;

    return (
        <div className='games-list'>
            <h2 className='games-list__header'> Games </h2>
            <div className="games-list__games-list">
                {games.map(gameRenderer)}
            </div>
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