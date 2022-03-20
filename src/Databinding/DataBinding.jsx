import React, { Component } from 'react'

export default class DataBinding extends Component {
    userName = 'abc'; //thuoc tinh phai nam ngoai phuong thuc & ko co tu khoa var/let/const
    product = {
        id: 1,
        name: 'Iphone',
        img: 'https://picsum.photos/id/1/200',
        price: 1000
    }

    //ham tu tao, react se khong goi
    renderProduct = () => {
        //dung arrow function de xem function la thuoc tinh de giu nguyen ngu canh cua con tro this.
        //noi dung tra ve phai la string, number, component (noi dung trong 1 the bao phu)
        return (
            <div className='card w-25'>
                <img src={this.product.img} alt="..." className='w-100' />
                <div className="card-body">
                    <p>{this.product.name}</p>
                    <p>{this.product.price.toLocaleString()}</p>
                    <button className='btn btn-success'>Them Gio Hang</button>
                </div>
            </div>
        )

    }

    //1 phuong thuc render, la ham mac dinh cua react, ham nay se duoc goi
    render() {
        let title = 'cybersoft';

        return (
            <div className='container'>
                <h3>DataBinding</h3>
                <p id='title'>{title}</p>
                <p>username: {this.userName}</p>
                <hr />
            { this.renderProduct() }
            </div>
        )
    }
}
