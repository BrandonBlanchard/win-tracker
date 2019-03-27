
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
    const opponentFaction = "opponent faction";

    row.faction in acc ? acc[row.faction] += 1 : acc[row.faction] = 1;
    opponentFaction in acc ? acc[row["opponent faction"]] +=1 : acc[row["opponent faction"]] = 1;

    return acc;
}

const factionWinReducer = (acc, row) => {
    const faction = row.win == "TRUE" ? row["faction"] : row["opponent faction"];
    acc[faction] ? acc[faction] += 1 : acc[faction] = 1;

    return acc;
}


const extractFactions = (rows) => objToArray(rows.reduce(factionReducer, {}));

const extractFactionWins = (rows) => objToArray(rows.reduce(factionWinReducer, {}));    


export {
    extractFactions,
    extractFactionWins
}