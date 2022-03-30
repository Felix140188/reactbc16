import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    //dung props de lay thong tin tu component cha truyen vao
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="..." height={300} />
        <div className="card-body">
          <h3>{sanPham.tenSP}</h3>
          <p>{sanPham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.xemChiTiet(sanPham);
            }}
          >
            Xem Chi Tiet
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Them Gio Hang
          </button>
        </div>
      </div>
    );
  }
}
