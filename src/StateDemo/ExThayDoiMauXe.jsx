import React, { Component } from 'react'

export default class ExThayDoiMauXe extends Component {

    state = {
        imgCarSrc: './img/products/black-car.jpg'
        //folder public se la folder cha, ko dung goi y duong dan cua Visual studio code
    }

    handleChangeCarImg = (color) => {
        let newImgCar = `./img/products/${color}-car.jpg`;
        this.setState({
            //setState hinh cu = hinh moi
            imgCarSrc : newImgCar
        })
    }

    render() {
        return (
            <div className='container mb-5'>
                <h3>Bai tap 3: Thay doi mau xe</h3>
                <div className="row">
                    <div className='col-8'>
                        <img className='img-fluid img-thumbnail' src={this.state.imgCarSrc} alt="..." />
                    </div>
                    <div className='col-4'>
                        <button style={{ backgroundColor: 'black', color: 'white' }} className='btn m-3' onClick={() => {
                            this.handleChangeCarImg('black');
                        }}>Black</button>
                        <br />
                        <button style={{ backgroundColor: 'red', color: 'white' }} className='btn m-3' onClick={() => {
                             this.handleChangeCarImg('red');
                        }}>Red</button>
                        <br />
                        <button style={{ backgroundColor: 'silver', color: 'white' }} className='btn m-3' onClick={() => {
                             this.handleChangeCarImg('silver');
                        }}>Silver</button>
                        <br />
                        <button style={{ backgroundColor: 'grey', color: 'white' }} className='btn m-3' onClick={() => {
                             this.handleChangeCarImg('steel');
                        }}>Steel</button>
                    </div>
                </div>
            </div>
        )
    }
}
