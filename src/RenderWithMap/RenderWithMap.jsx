import React, { Component } from 'react'

//render mang nhung the dong cap vs nhau (vd: li, tr...)
export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'steel car', img: './img/products/steel-car.jpg', price: 4000 },
    ]

    renderProduct = () => {
        // Cach 1:
        // let arrJSX = [];
        // for (let prod of this.productList) {
        //     let trJSX = <tr>
        //         <td>{prod.id}</td>
        //         <td>{prod.name}</td>
        //         <td><img src={prod.img} alt="..." width={100} height={50} /></td>
        //         <td>{prod.price}</td>
        //     </tr>;
        //     //dua tr vao mang arrJSX
        //     arrJSX.push(trJSX);
        // }

        // return arrJSX; //tra ve mang co nhieu the tr ben trong

        //Cach 2:
        let result = this.productList.map((renderProd, index) => {
            return <tr key={renderProd.id}> 
            {/* phai set key de tranh loi nay:
            Warning: Each child in a list should have a unique "key" prop.
            */}
                <td>{renderProd.id}</td>
                <td>{renderProd.name}</td>
                <td><img src={renderProd.img} alt="..." width={100} height={50} /></td>
                <td>{renderProd.price}</td>
            </tr>;
        })
        return result;
    }
    render() {
        return (
            <div className="container-fluid mt-2">
                <table className='table text-center'>
                    <thead className='bg-dark text-light'>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Price</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}
