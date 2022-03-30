import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class DemoXemChiTiet extends Component {
  dsSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  //xac dinh san pham chi tiet la du lieu thay doi => state
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [
      {
        maSP: 4,
        tenSP: "Meizu 16Xs",
        hinhAnh: "./img/meizuphone.jpg",
        soLuong: 1,
        giaBan: 7600000,
      },
    ],
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    console.log(maSPClick);
    console.log(soLuong);
    let { gioHang } = this.state;
    let spGH = gioHang.find((sp) => sp.maSP === maSPClick);
    if (spGH) {
      //+ soluong
      spGH.soLuong += soLuong;
      if (spGH.soLuong < 1) {
        if (window.confirm("商品を削除しますか？")) {
          gioHang = gioHang.filter((sp) => sp.maSP !== maSPClick);
          this.setState({
            gioHang: gioHang,
          });
          return;
        }
        spGH.soLuong += 1;
      }
    }
    this.setState({
      gioHang: gioHang,
    });
  };

  xoaGioHang = (maSPClick) => {
    console.log(maSPClick);
    let { gioHang } = this.state;
    //tim ra sp co maSP chua trong gio hang roi xoa di
    //Cach 1: dung findIndex
    // let index = gioHang.findIndex((sp) => sp.maSP === maSPClick);
    // if (index != -1) {
    //   if (window.confirm("商品を削除しますが、よろしいでしょうか？")) {
    //     gioHang.splice(index, 1);
    //   }
    // }

    //Cach 2: dung filter
    if (window.confirm("商品を削除しますが、よろしいでしょうか？")) {
      gioHang = gioHang.filter((sp) => sp.maSP !== maSPClick);
    }
    this.setState({
      gioHang: gioHang,
    });
  };

  //state dat o dau thi ham goi setState dat o do
  themGioHang = (sanPhamClick) => {
    console.log(sanPhamClick);
    //tu sp click tao sp co thuoc tinh so luong
    let spGioHang = { ...sanPhamClick, soLuong: 1 };
    //lay ra gio hang tu state va xu ly
    let { gioHang } = this.state;

    //kiem tra sp co trong gio hang hay chua
    let spGH = gioHang.find((sp) => sp.maSP === sanPhamClick.maSP);
    if (spGH) {
      //co ton tai
      spGH.soLuong += 1;
    } else {
      //chua ton tai
      gioHang.push(spGioHang);
    }

    //setState
    this.setState({
      gioHang: gioHang,
    });
  };

  xemChiTiet = (sanPhamClick) => {
    //   console.log(sanPhamClick); confirm co the log ra duoc sp
    //setState de render lai sp
    this.setState({
      sanPhamChiTiet: sanPhamClick,
    });
  };

  tinhTongSoLuong = () => {
    let tongSoLuong = this.state.gioHang.reduce((soLuong, spGioHang, index) => {
      return (soLuong += spGioHang.soLuong);
    }, 0);
    let tongTien = this.state.gioHang.reduce((tien, spGioHang, index) => {
      return (tien += spGioHang.soLuong * spGioHang.giaBan);
    }, 0);
    return `${tongSoLuong} - ${tongTien.toLocaleString()}`;
  };

  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      cameraSau,
      cameraTruoc,
      giaBan,
      heDieuHanh,
      hinhAnh,
      ram,
      rom,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <div className="text-right">
          <span className="text-danger" style={{ cursor: "pointer" }}>
            {/* Gio Hang ({this.state.gioHang.length}) */}
            Gio Hang ({this.tinhTongSoLuong()})
          </span>
        </div>
        <GioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <h3 className="text-center">Danh Sach San Pham</h3>
        <div class="row">
          {this.dsSanPham.map((dienThoai, index) => {
            return (
              <div className="col-4" key={index}>
                <SanPham
                  sanPham={dienThoai}
                  xemChiTiet={this.xemChiTiet}
                  themGioHang={this.themGioHang}
                />
                {/* this.xemChiTiet ko co dau ngoac(), 
                vi co dau ngoac se goi luon ham do o day, dan den setState 3 lan*/}
              </div>
            );
          })}
        </div>
        <div className="row my-5">
          <div className="col-4">
            <h3>{tenSP}</h3>
            <img src={hinhAnh} alt="..." height={300} className="w-100" />
          </div>
          <div className="col-8">
            <h3>Thong So Ky Thuat</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>Man Hinh</th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th>He Dieu Hanh</th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera Truoc</th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th>lCamera Sau</th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th>ROM</th>
                  <td>{rom}</td>
                </tr>
                <tr>
                  <th>Gia Ban</th>
                  <td>{giaBan.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
