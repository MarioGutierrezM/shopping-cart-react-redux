//Depndencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProductController from "../../controllers/productController";

class ProductUpdate extends Component {

    constructor() {
        super();

        this.state = {
            data: [],
            pagination: 0
        };
        //con bind se optiene todo el objeto this de la clase
        this.onOpen = this.onOpen.bind(this);
    }

    componentDidMount() {
    }

    onOpen(e) {
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        let url =   `${API_URL}/api/product?category=&name=&page=${this.state.pagination}&items=4` ||
                    `http://localhost:3000/api/product?category=&name=&page=${this.state.pagination}&items=4`;
        ProductController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            })
        });
    }

    async handlePaginationPrev(e) {
        if (this.state.pagination === 0) {
            let API_URL = 'https://shopping-cart-api.herokuapp.com'
            let url =   `${API_URL}/api/product?category=&name=&page=${this.state.pagination}&items=4` ||
                        `http://localhost:3000/api/product?category=&name=&page=${this.state.pagination}&items=4`;
            ProductController.getAllProducts(url, res => {
                this.setState({
                    data: res.body
                });
            });
        } else {
            await this.setState({
                pagination: this.state.pagination - 1
            });
            let API_URL = 'https://shopping-cart-api.herokuapp.com'
            let url =   `${API_URL}/api/product?category=&name=&page=${this.state.pagination}&items=4` || 
                        `http://localhost:3000/api/product?category=&name=&page=${this.state.pagination}&items=4`;
            ProductController.getAllProducts(url, res => {
                this.setState({
                    data: res.body
                });
            });
        }
    }

    async handlePaginationNext(e) {
        await this.setState({
            pagination: this.state.pagination + 1
        });
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        let url =   `${API_URL}/api/product?category=&name=&page=${this.state.pagination}&items=4` || 
                    `http://localhost:3000/api/product?category=&name=&page=${this.state.pagination}&items=4`;
        ProductController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            });
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
                                {this.state.data.map((product, key) => {
                                    return (
                                        <li className="list-group-item" key={key}>
                                            <div className="row">
                                                <div className="col-md-4 listSmall">
                                                    <img className="imgSmall2" src={product.imageUrl} alt="" />
                                                </div>
                                                <div className="col-md-4 listSmall listLeft">
                                                    Name: {product.name} <br />
                                                    Description: {product.description}<br />
                                                    Category: {product.category}<br />
                                                    Price: {product.price}<br />
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
                        <div>
                            <br />
                            <nav aria-label="Page navigation example">
                                <ul className="pagination pag-center">
                                    <li className="page-item"><a className="page-link" onClick={e => this.handlePaginationPrev(e)}>Previous</a></li>
                                    <li className="page-item disabled"><a className="page-link" >{this.state.pagination + 1}</a></li>
                                    <li className="page-item"><a className="page-link" onClick={e => this.handlePaginationNext(e)}>Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductUpdate;