import React, { Component } from 'react'

export default class XucXac extends Component {
    render() {
        return (
            <div className='row mt-4 text-center'>
                <div className="col-4 ">
                    <button className='btn btn-danger'>
                        <div className='display-4 p-2'>TÀI</div>
                    </button>
                </div>
                <div className="col-4 align-self-center">
                    <img width={50} height={50} src="./img/gameXucXac/1.png" alt="..." />
                    <img width={50} height={50} src="./img/gameXucXac/1.png" alt="..." />
                    <img width={50} height={50} src="./img/gameXucXac/1.png" alt="..." />
                </div>
                <div className="col-4">
                    <button className='btn btn-danger'>
                        <div className='display-4 p-2'>XỈU</div>
                    </button></div>
            </div>
        )
    }
}
