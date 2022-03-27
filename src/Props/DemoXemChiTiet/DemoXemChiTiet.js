import React, { Component } from 'react'

export default class DemoXemChiTiet extends Component {
    
    dsSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
      ]
      //xac dinh san pham chi tiet la du lieu thay doi => state
      state = {
          sanPhamChiTiet:{
            "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg"
          }
      }

      xemChiTiet = (sanPhamClick) => {
        //   console.log(sanPhamClick); confirm co the log ra duoc sp
        //setState de render lai sp
        this.setState({
            sanPhamChiTiet:sanPhamClick
        })
      }

  render() {
      let {maSP, tenSP, manHinh, cameraSau, cameraTruoc, giaBan, heDieuHanh, hinhAnh, ram, rom} = this.state.sanPhamChiTiet;
    return (
      <div className='container'>
        <h3 className='text-center'>Danh Sach San Pham</h3>
        <div class="row">
            {this.dsSanPham.map((dienThoai,index) => {
                return <div className='col-4' key={index}>
                <div className='card'>
                    <img src={dienThoai.hinhAnh} alt='...' height={300} />
                    <div className='card-body'>
                        <h3>{dienThoai.tenSP}</h3>
                        <p>{dienThoai.giaBan.toLocaleString()}</p>
                        <button className='btn btn-success' onClick={() => {
                            this.xemChiTiet(dienThoai);
                        }}>Xem Chi Tiet</button>
                    </div>
                </div>
            </div>
            })}
        </div>
        <div className='row my-5'>
            <div className='col-4'>
                <h3>{tenSP}</h3>
                <img src={hinhAnh} alt='...' height={300} className="w-100" />
            </div>
            <div className='col-8'>
                <h3>Thong So Ky Thuat</h3>
                <table className='table'>
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
                            <th>Camera truoc</th>
                            <td>{cameraTruoc}</td>
                        </tr>
                        <tr>
                            <th>lCamera sau</th>
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
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}
