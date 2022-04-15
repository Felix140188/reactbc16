import React, { Component } from 'react'
//Ket noi Redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Ma San Pham</th>
            <th>Ten San Pham</th>
            <th>Hinh Anh</th>
            <th>Gia Ban</th>
            <th>So Luong</th>
            <th>Thanh Tien</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
              <td>{spGH.maSP}</td>
              <td>{spGH.tenSP}</td>
              <td>
                <img src={spGH.hinhAnh} alt="..." width={50} height={50} />
              </td>
              <td>{spGH.giaBan.toLocaleString()}</td>
              <td>
                <button className='btn btn-primary mr-2' onClick={() => {
                  this.props.tangGiamSoLuong(spGH.maSP, 1)
                }}>+</button>
                {spGH.soLuong}
                <button className='btn btn-primary ml-2' onClick={() => {
                  this.props.tangGiamSoLuong(spGH.maSP, -1)
                }}>-</button>
              </td>
              <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
              <td>
                <button className='btn btn-danger' onClick={() => {
                  this.props.xoaGioHang(spGH.maSP);
                }}>Xoa</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    )
  }
}

//Lay state tu redux ve bien thanh props component
const mapStateToProps = (rootReducer) => {
  //muon lay du lieu nao ve thi tao ra thuoc tinh lay gia tri tu redux
  return {
    gioHang: rootReducer.gioHangState
    //gioHang: sinh ra props, neu dat ten khac, vd: gioHang123 thi props se co ten gioHang123
    //rootReducer: noi lay gia tri tu redux ve, .{value...}
  }

}

//Viet ham mapdispatchtoProps dinh nghia ham gui du lieu len redux
const mapdispatchtoProps = (dispatch) => {

  return {
    xoaGioHang: (maSPClick) => {
      console.log('ma san pham click: ', maSPClick);
      const action = {
        type: 'XOA_GIO_HANG',
        maSPClick
      }
      //dua du lieu len redux
      dispatch(action);
    },
    tangGiamSoLuong: (maSPClick, soLuong) => {
      console.log(maSPClick, soLuong);
      //tao ra action gui len reducer
      const action = {
        type: 'TANG_GIAM_SO_LUONG',
        maSPClick,
        soLuong
      }
      //dung ham dispatch tu redux de dua du lieu len store
      dispatch(action);
    }
  }
}

//cu phap tao ra 1 component co lien ket redux, mapdispatchtoProps luon la tham so thu 2
export default connect(mapStateToProps, mapdispatchtoProps)(GioHangRedux);