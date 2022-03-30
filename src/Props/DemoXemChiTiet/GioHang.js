import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Ma San Pham</th>
            <th>Ten San Pham</th>
            <th>Hinh Anh</th>
            <th>Gia Ban</th>
            <th>So luong</th>
            <th>Thanh Tien</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((spGH, index) => {
            return (
              <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td>
                  <img src={spGH.hinhAnh} width={50} height={50} />
                </td>
                <td>{spGH.giaBan.toLocaleString()}</td>
                {/* <td>{spGH.soLuong}</td> */}
                <td>
                    <button className="btn btn-primary mx-2" onClick={() => {
                        tangGiamSoLuong(spGH.maSP,1)
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-primary mx-2" onClick={() => {
                        tangGiamSoLuong(spGH.maSP,-1)
                    }}>-</button>
                </td>
                <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => {
                      xoaGioHang(spGH.maSP);
                    }}
                    className="btn btn-danger"
                  >
                    Xoa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
