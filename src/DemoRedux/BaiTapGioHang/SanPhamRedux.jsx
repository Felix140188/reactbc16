import React, { Component } from 'react'
//ket noi voi redux
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="..." className='w-100' height={300} />
        <div className="card-body">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan.toLocaleString()}</p>
          <button className='btn btn-success' onClick={() => {
            this.props.themGioHang(sanPham)
          }}>Add to Cart</button>
        </div>
      </div>
    )
  }
}

//mapDispatchToProps: la ham tao ra 1 props la 1 ham dung de dua gia tri len redux store
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (spClick) => {
      console.log('san pham Click: ', spClick);
      //dua du lieu len redux
      //khi ham co dispatch (action) thi tat ca cac ham deu chay
      //do do all ham phai co action de switch cases
      //thuoc tinh type la thuoc tinh bat buoc, ko dat ten khac
      const action = {
        type: 'THEM_GIO_HANG', 
        spClick: spClick
      }
      dispatch(action)
    }
  }
}

//mapDispatchToProps duoc truyen vao vi tri thu 2
export default connect(null, mapDispatchToProps)(SanPhamRedux)