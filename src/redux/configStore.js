import { combineReducers, createStore } from "redux";

const stateGioHangDefault = [
    {
        maSP: 4,
        tenSP: "Meizu 16Xs",
        hinhAnh: "./img/meizuphone.jpg",
        soLuong: 1,
        giaBan: 7600000,
    }
]

const rootReducer = combineReducers({
    //Cac state cua ung dung dat tai day
    gioHangState: (state = stateGioHangDefault, action) => {
        //khi ham co dispatch (action) thi tat ca cac ham deu chay
        //do do all ham phai co action de switch cases
        switch (action.type) {
            case 'THEM_GIO_HANG': {
                //tao ra sp gio hang co so luong
                let spGH = { ...action.spClick, soLuong: 1 };
                state = [...state, spGH];
                return state; //return ve state moi
            }
            default: return state;
        }
    }
    //nhieu state
});


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());