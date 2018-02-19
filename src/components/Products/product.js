//Depndencies
import React, { Component } from "react";
import ProductController from "../../controllers/productController";
import { Link } from "react-router-dom";


class Product extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        const url = `${process.env.API_URL}/api/product/${id}` || `http://localhost:3000/api/product/${id}`;
        ProductController.getProduct(url, res => {
            this.setState({
                data: res.body
            })
        })
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1>Product: {this.state.data.name}</h1>
                <hr />
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="card-img-top imgBig" src={this.state.data.imageUrl} alt="Card img cap" />
                        </div>
                        <div className="col-md-6 posCent">
                            <div className="card-body">
                                <h3 className="card-title">{this.state.data.name}</h3><br />
                                <h5 className="card-text">
                                    <i className="fas fa-info"></i>  Description: <small className="text-muted">{this.state.data.description}</small>
                                </h5>
                                <h5 className="card-text">
                                    <i className="fas fa-dollar-sign"></i>  Price: <small className="text-muted">{this.state.data.price}</small>
                                </h5>
                                <h5 className="card-text">
                                    <i className="fas fa-tag"></i> Category: <small className="text-muted">{this.state.data.category}</small><br />
                                </h5>
                            </div>
                            <div>
                                <Link to={"/products"} className="withoutLink">
                                    <button type="button" className="btn btn-outline-info btn-block">
                                        <i className="fas fa-chevron-circle-left"></i> Back to the products
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;