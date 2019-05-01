import has from 'lodash/has';

const OPPONENT_FACTION = "opponent faction";

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
            player: game.player
        }
    }

    if(has(acc, game.opponent)) {
        acc[game.opponent].games += 1;
        acc[game.opponent].wins += !playerDidWin ? 1 : 0;
    } else {
        acc[game.opponent] = {
            games: 1,
            wins: !playerDidWin ? 1 : 0,
            player: game.opponent
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

const dataLoadReducer = (prevState, action) => {
    console.log('data load reducer', prevState, action);

    return {
        players: [ ...Object.values(action.payload.reduce(playerReducer, {}))],
        factions: [...Object.values(action.payload.reduce(factionReducer, {}))]
    }
};


export default dataLoadReducer;