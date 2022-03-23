import React, { Component } from 'react'

export default class ExThayDoiFontChu extends Component {

    //buoc 2: xac dinh du lieu
    state = {
        fSize: 20 //state la fontSize, kieu du lieu number
    }

    handleChangeFontSize = (number) => {
        this.setState({
            fSize: this.state.fSize + number
        })
    }
    render() {
        return (
            //buoc 1: dan layout
            <div className='container'>
                <h3>Bai tap 1: thay doi font chu</h3>
                {/* buoc 3: binding len giao dien */}
                <p style={{ fontSize: `${this.state.fSize}px` }}>
                    Hoc lap trinh front-end Cybersoft !!!
                </p>
                <button className='btn btn-primary ml-3' onClick={() => {
                    // let newFSize = this.state.fSize + 5;
                    // //xu ly setState
                    // this.setState({
                    //     fSize: newFSize
                    // })
                    this.handleChangeFontSize(5);
                }}>+</button>
                <button className='btn btn-primary ml-3' onClick={() => {
                    // let newFSize = this.state.fSize - 5;
                    // //xu ly setState
                    // this.setState({
                    //     fSize: newFSize
                    // })
                    this.handleChangeFontSize(-5);
                }}>-</button>
            </div>
        )
    }
}
