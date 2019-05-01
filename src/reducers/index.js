import { ACTION_TYPE } from './../actions/index';
import dataLoadReducer from './data-load';

const initialState = {
    data: {
        // { player: 'brandon', wins: 20, games: 30, }
        players:[],
        // { faction: 'crucible guard', wins: 20, games: 30 }
        factions: [],
    }
}

const rootReducer = (prevState = initialState, action) => {
    console.log(action, ACTION_TYPE.DATA_LOAD)
    return {
        data: action.type === ACTION_TYPE.DATA_LOAD ? Object.assign({}, prevState.data, dataLoadReducer(prevState, action)) : Object.assign({}, prevState.data), 
    }
};

export default rootReducer;