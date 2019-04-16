
const objToArray = (data) => {
    return [{
        type: 'pie',
        labels: Object.keys(data),
        values: Object.values(data),
        domain: { column: 0 },
        hole: .96,   
        textinfo: 'label+percent'
    }];
};

const factionReducer = (acc, row) =>  { 
    const opponentFaction = row["opponent faction"];

    row.faction in acc ? acc[row.faction] += 1 : acc[row.faction] = 1;
    opponentFaction in acc ? acc[opponentFaction] +=1 : acc[opponentFaction] = 1;

    return acc;
}

const factionWinReducer = (acc, row) => {
    const faction = row.win == "TRUE" ? row["faction"] : row["opponent faction"];
    acc[faction] ? acc[faction] += 1 : acc[faction] = 1;

    return acc;
}

const playerWinReducer = (acc, row) => {
    const playerOutcome = row.win == "TRUE" ? 1 : 0;
    const opponentOutcome = row.win == "FALSE" ? 0 : 1;

    if(row.player in acc) {
        acc[row.player] += playerOutcome;
    } else {
        acc[row.player] = playerOutcome;
    }

    if(row.opponent in acc) {
        acc[row.opponent] += opponentOutcome;
    } else {
        acc[row.opponent] = opponentOutcome;
    }

    return acc;
}

const extractFactions = (rows) => objToArray(rows.reduce(factionReducer, {}));

const extractFactionWins = (rows) => objToArray(rows.reduce(factionWinReducer, {}));    

const extractPlayerWins = (rows) => objToArray(rows.reduce(playerWinReducer, {}));

export {
    extractFactions,
    extractFactionWins,
    extractPlayerWins
}