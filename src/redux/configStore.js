//config nam trong thu muc redux la noi xay dung state tong cua ung dung

import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { XucXacReducer } from "./reducers/xucXacReducer";

const rootReducer = combineReducers({
    //Cac state cua ung dung dat tai day
    gioHangState: gioHangReducer,
    XucXacReducer: XucXacReducer,
    //nhieu state
});


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());