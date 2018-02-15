//Depndencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProductController from "../../controllers/productController";

class ProductUpdate extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        };
        //con bind se optiene todo el objeto this de la clase
        this.onOpen = this.onOpen.bind(this);
    }

    componentDidMount() {
    }

    onOpen(e){
        let url = 'http://localhost:3000/api/product/';
        ProductController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            })
        });
    }



    render() {
        return (
            <div>
                <div className="alert alert-warning" role="alert">
                    <button className="btn btn-outline-warning darkYellow" onClick={this.onOpen} type="button" data-toggle="collapse" data-target="#productUpd" aria-expanded="false" aria-controls="productUpd">
                        <i className="fas fa-edit"></i> Update a Product
                    </button>
                    <div className="collapse" id="productUpd">
                        <div className="card card-body">
                        <ul className="list-group">
                            { this.state.data.map((product, key) => {
                                return (
                                    <li className="list-group-item" key={key}>
                                        <div className="row">
                                            <div className="col-md-4 listSmall"> 
                                                <img className="imgSmall2" src={product.imageUrl} alt=""/>
                                            </div>
                                            <div className="col-md-4 listSmall listLeft">
                                                Name: {product.name} <br/>
                                                Description: {product.description}<br/>
                                                Category: {product.category}<br/>
                                                Price: {product.price}<br/>
                                                Stock: {product.stock}
                                            </div>
                                            <div className="col-md-4 listSmall listCenter">
                                                <Link to={`/admin/updateProduct/${product._id}`} className="darkYellow">
                                                    <button className="btn btn-outline-warning darkYellow" >  Modify </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductUpdate;