import React, { Component } from 'react'

export default class HandleEvent extends Component {
  showMessage = () => {
    alert('Hello hello !!!');
  }

  sayHello = (name) => {
    alert('Hi, ' + name);
  }
  render() {
    return (
      <div className='container'>
        <h3>Handle Event</h3>
        <button id='btn' className='btn btn-success' onClick={this.showMessage}>Click me!!!</button>
        {/* showMessage o day ko co dau () vi luc goi ham thi chua co hanh dong click */} <hr />
        <button id='btn' className='btn btn-success' onClick={() => {
          alert('Hello hello !!!');
        }}>Click me!!!</button>
        <hr />
        <h3>Xu ly su kien co tham so</h3>
        <button className='btn btn-success' onClick={this.sayHello.bind(this, 'Fuong')}>Say Hello</button>
        <hr />
        {/* Cach thuong duoc su dung */}
        <button className='btn btn-success' onClick={() => {
          this.sayHello('Fuong Peo');
          //goi nhieu ham cung luc ....
        }}>Say Hello</button>
      </div>
    )
  }
}
