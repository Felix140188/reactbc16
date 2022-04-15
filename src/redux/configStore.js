import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";

const rootReducer = combineReducers({
    //Cac state cua ung dung dat tai day
    gioHangState: gioHangReducer,
    //nhieu state
});


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());