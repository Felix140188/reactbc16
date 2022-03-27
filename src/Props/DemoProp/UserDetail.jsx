import React, { Component } from 'react'

export default class UserDetail extends Component {



  render() {
      let {hocVien} = this.props;
    return (
      <div className='d-flex mb-3'>
          <div style={{width: 200}}>
              <img className='w-100' src={hocVien.hinhAnh} alt="..." />
          </div>
          <div className='ml-2'>
              <p>Ho ten: {hocVien.hoTen}</p>
              <p>Ngay sinh: {hocVien.ngaySinh}</p>
              <p>Email: {hocVien.email}</p>
              <p>So dien thoai: {hocVien.soDienThoai}</p>
          </div>
      </div>
    )
  }
}
