const stateGioHangDefault = [
    {
        maSP: 4,
        tenSP: "Meizu 16Xs",
        hinhAnh: "./img/meizuphone.jpg",
        soLuong: 1,
        giaBan: 7600000,
    }
]

export const gioHangReducer = (state = stateGioHangDefault, action) => {
    //khi ham co dispatch (action) thi tat ca cac ham deu chay
    //do do all ham phai co action de switch cases
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //tao ra sp gio hang co so luong
            let spGH = { ...action.spClick, soLuong: 1 };
            let gioHang = [...state];

            let sp = gioHang.find(spGioHang => spGioHang.maSP === action.spClick.maSP);

            if (sp) {
                sp.soLuong += 1;
            } else {
                gioHang.push(spGH);
            }
            return [...gioHang]; //return ve state moi
        }
        case 'XOA_GIO_HANG': {
            let gioHang = [...state];
            gioHang = gioHang.filter(sp => sp.maSP !== action.maSPClick);
            return gioHang;
        }
        case 'TANG_GIAM_SO_LUONG': {

            let gioHang = [...state];
            //tim sp tang giam
            let sp = gioHang.find(spGH => spGH.maSP === action.maSPClick);
            if (sp) {
                sp.soLuong += action.soLuong;
                if (sp.soLuong < 1) {
                    alert('The quantity can not less than 1 !!!');
                    sp.soLuong += 1;
                }
            }
            return gioHang;
        }
        //immutable: tinh bat bien 
        default: return state;
    }
}