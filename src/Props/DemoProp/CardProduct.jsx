import React, { Component } from 'react'
/*
this.props: 
    - la thuoc tinh co san cua react class component
dung de nhan gia tri tu component cha truyen vao
    - la thuoc tinh khong the gan lai gia tri (readonly)
    - this.props.name = "abc";
*/
/*
phan biet state vs props:
    - Giong nhau: deu la thuoc tinh co san cua react class component
      => dung de chua du lieu render len giao dien
    - Khac nhau: 
        + this.state dung de chua gia tri thay doi tren giao dien
        va co the gan lai duoc thong qua phuong thuc setState.
        + this.props nhan du lieu tu component cha truyen vao
        va khong the gan lai gia tri duoc (readonly value)
*/

export default class CardProduct extends Component {
  render() {
    return (
      <div className='card'>
          {/* CardProduct vs DemoProps 
        phai dat giong ten name vs price, img
       */}
          <img src={this.props.img} alt="..." />
          <div className="card-body">
              <p>{this.props.name}</p> 
              <p>{this.props.price}</p>
              <button className='btn btn-success'>Add to Cart</button>
          </div>
      </div>
    )
  }
}
