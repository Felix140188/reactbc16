import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className='card'>
                <img className='w-100' src={product.image} alt="..." />
                    <div className="card-body">
                        <p>{product.name}</p>
                        <p>{product.quantity}</p>
                        <button className='btn btn-dark text-white'>Add to Cart</button>
                    </div>
            </div>
        )
    }
}
