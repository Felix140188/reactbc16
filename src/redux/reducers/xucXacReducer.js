
const stateDefault = {
    yourChoice: false, //true: Tai | false: Xiu
    totalWin: 0,
    totalPlayed: 0,
    mangXucXac: [
        { diem: 1, img: './img/gameXucXac/1.png' },
        { diem: 1, img: './img/gameXucXac/1.png' },
        { diem: 1, img: './img/gameXucXac/1.png' } 
    ]
}

export const XucXacReducer = (state = stateDefault, action) => {

    switch (action.type) {

        default: return state; //default la truong hop chua goi gi den ham XucXacReducer nay
    }
}

//return state trong ham reducer se phu thuoc vao gia tri default cua state (Vd: stateDefault la object => reducer phai return ve object, stateDefault la array thi reducer return ve arrays)