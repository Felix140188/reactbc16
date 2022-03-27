import React, { Component } from 'react'
import CardProduct from './CardProduct'
import UserDetail from './UserDetail'

export default class DemoProps extends Component {

    //object hoc vien
    hocVien = {
        hoTen: 'Nguyen Van A',
        ngaySinh: '10-10-2010',
        email: 'nguyenvana@gmail.com',
        soDienThoai: '0909111111',
        hinhAnh: 'https://i.pravatar.cc?u=6'
    }

    //array hoc vien
    danhSachHocVien = [
        {
            hoTen: 'Nguyen Van A',
            ngaySinh: '10-10-2010',
            email: 'nguyenvana@gmail.com',
            soDienThoai: '0909111111',
            hinhAnh: 'https://i.pravatar.cc?u=6'
        },
        {
            hoTen: 'Nguyen Van B',
            ngaySinh: '10-10-1999',
            email: 'nguyenvanb@gmail.com',
            soDienThoai: '0909222222',
            hinhAnh: 'https://i.pravatar.cc?u=7'
        },
        {
            hoTen: 'Nguyen Van C',
            ngaySinh: '10-10-2000',
            email: 'nguyenvanc@gmail.com',
            soDienThoai: '0909555555',
            hinhAnh: 'https://i.pravatar.cc?u=8'
        }
    ]

    //ham map
    renderHocVien = () => {
        let result = this.danhSachHocVien.map((arrHocVien, index) => {
            return <div className="col-6 mt-2" key={index}>
                <UserDetail hocVien={arrHocVien} />
            </div>
        })
        return result;
        //co the thay let result = return.this...
    }
    render() {
        return (
            <div className='container'>
                <h3>Demo Props</h3>
                <div className="w-25">
                    <CardProduct img="https://i.pravatar.cc?u=5" name="Iphone" price="1000" />
                </div>
                <div className="w-25">
                    <CardProduct img="https://i.pravatar.cc?u=10" name="Samsung" price="2000" />
                </div>
                <hr />
                {/* demo prop dang object */}
                <h3>Thong tin ca nhan</h3>
                <UserDetail hocVien={this.hocVien} />
                <hr />
                {/* demo prop dang array */}
                <h3>Danh Sach Hoc Vien</h3>
                <div className="row">
                    {this.renderHocVien()}
                </div>
            </div>
        )
    }
}
