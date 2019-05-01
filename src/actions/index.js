// Action Types
const ACTION_TYPE = Object.freeze({
    DATA_LOAD: 'DATA_LOAD'
});

// Actions
const dataLoad = (rawData) => {
    return { type: ACTION_TYPE.DATA_LOAD, payload: rawData }
}

export {ACTION_TYPE, dataLoad}