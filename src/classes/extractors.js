
const objToArray = (data) => {
    return [{
        type: 'pie',
        labels: Object.keys(data),
        values: Object.values(data),
        domain: { column: 0 },
        hole: .4
    }];
};

const factionReducer = (acc, row) =>  { 
    row.faction in acc ? acc[row.faction] += 1 : acc[row.faction] = 1;
    return acc;
}

const extractFactions = (rows) => objToArray(rows.reduce(factionReducer, {}));

export {
    extractFactions
}