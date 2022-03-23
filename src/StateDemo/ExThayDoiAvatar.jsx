import React, { Component } from 'react'

export default class ExThayDoiAvatar extends Component {
    //buoc 2: xac dinh du lieu
    state = {
        imgSrc: 'https://i.pravatar.cc?u=1'
        //sau khi xac dinh state, cho gia tri mac dinh luon
    }

    handleChangeAvatar = () => {
        //tao 1 con so ngau nhien tu 1 -> 100
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let newImgSrc = `https://i.pravatar.cc?u=${randomNumber}`;
        //xu ly setState
        this.setState({
            imgSrc : newImgSrc
        })
    }
    //buoc 1: build giao dien  
    render() {
        return (
            <div className='container'>
                <h3>Bai tap 2: Thay doi anh dai dien ngau nhien</h3>
                <div className="card w-25">
                    {/* buoc 3: binding state len giao dien */}
                    <img src={this.state.imgSrc} alt="..." />
                    <div className="card-body">
                        <button className='btn btn-info' onClick={() => {
                            this.handleChangeAvatar();
                        }}>Change Avatar</button>
                    </div>
                </div>
            </div>
        )
    }
}
