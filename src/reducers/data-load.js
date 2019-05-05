import has from 'lodash/has';

const OPPONENT_NAME = 'opponent';
const OPPONENT_CASTER = 'opponent caster';
const OPPONENT_FACTION = "opponent faction";
const OPPONENT_THEME = 'opponent theme';
const OPPONENT_CONTROL_POINTS = 'opponent control points';
const MY_CONTROL_POINTS = 'my control points';
const WIN_CONDITION = 'win condition';

const playerReducer = (acc, game) => {
    const playerDidWin = game.win === "TRUE";
    
    // DRY ?
    if(has(acc, game.player)) {
        acc[game.player].games += 1;
        acc[game.player].wins += playerDidWin ? 1 : 0;
    } else {
        acc[game.player] = {
            games: 1,
            wins: playerDidWin ? 1 : 0,
            player: game.player,
            faction: game.faction
        }
    }

    if(has(acc, game.opponent)) {
        acc[game.opponent].games += 1;
        acc[game.opponent].wins += !playerDidWin ? 1 : 0;
    } else {
        acc[game.opponent] = {
            games: 1,
            wins: !playerDidWin ? 1 : 0,
            player: game.opponent,
            faction: game[OPPONENT_FACTION]
        }
    }

    return acc;
}

const factionReducer = (acc, game) => {
    const factionDidWin = game.win === "TRUE";

    if(has(acc, game.faction)) {
        acc[game.faction].wins += factionDidWin ? 1 : 0;
        acc[game.faction].games += 1;
    } else {
        acc[game.faction] = {
            faction: game.faction,
            wins: factionDidWin ? 1 : 0,
            games: 1
        };
    }

    if(has(acc, game[OPPONENT_FACTION])) {
        acc[game[OPPONENT_FACTION]].wins += !factionDidWin ? 1 : 0;
        acc[game[OPPONENT_FACTION]].games += 1;
    } else {
        acc[game[OPPONENT_FACTION]] = {
            faction: game[OPPONENT_FACTION],
            wins: !factionDidWin ? 1 : 0,
            games: 1
        };
    }

    return acc;
}


const gamesMapper = (game) => {
    const player1 = {
        name: game.player,
        caster: game.caster,
        faction: game.faction,
        theme: game.theme,
        controlPoints: game[MY_CONTROL_POINTS],
        win: game.win === "TRUE",
    };

    const player2 = {
        name: game[OPPONENT_NAME],
        caster: game[OPPONENT_CASTER],
        faction: game[OPPONENT_FACTION],
        theme: game[OPPONENT_THEME],
        controlPoints: game[OPPONENT_CONTROL_POINTS],
        win: game.win === "FALSE"
    };

    return {
        winCondition: game[WIN_CONDITION],
        player1,
        player2
    };
}

const dataLoadReducer = (prevState, action) => {
    console.log('data load reducer', prevState, action);

    return {
        players: [ ...Object.values(action.payload.reduce(playerReducer, {}))],
        factions: [...Object.values(action.payload.reduce(factionReducer, {}))],
        games: [...Object.values(action.payload.map(gamesMapper))]
    }
};


export default dataLoadReducer;