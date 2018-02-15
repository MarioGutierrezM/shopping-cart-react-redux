//Depndencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import productController from "../../controllers/productController";
import OrderController from "../../controllers/orderController";


class Products extends Component {

    constructor() {
        super();

        this.state = {
            data: [],
            newOrder: [],
            quantity: 0
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3000/api/product';
        productController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            })
        });
    }

    addToCart(e){
        console.log("added", e.target.value);
        OrderController.addProduct(e.target.value, this.state.newOrder, this.state.quantity, res => {
            this.setState({
                newOrder: res
            })
        });
        this.props.getPreOrder(this.state.newOrder);//mandamos a padre
    }

    handleNumber(e){
        this.setState({
            quantity: Number(e.target.value)
        })
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1><i className="fas fa-tags"></i> Products</h1>
                <hr/>

                <div className="card-columns">
                    { this.state.data.map( (item, key) => {
                        return (
                            <div className="card " key={key}>
                                <img className="card-img-top imgMed" src={item.imageUrl} alt="Card img cap" />
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                    <h5 className="card-text">
                                        <i className="fas fa-dollar-sign"></i> Price: <small className="text-muted">{item.price}</small>
                                    </h5>
                                </div>
                                <div>
                                    <Link to={`/product/${item._id}`} className="withoutLink">
                                        <button type="button" className="btn btn-primary btn-outline-primary  btn-block">
                                            <i className="fas fa-info-circle"></i> Details
                                        </button>
                                    </Link>
                                    <div className="row btnAndCount">
                                        <div className="col-md-3 btnAndCount">
                                            <input className="form-control border-green" type="number" max="10" min="1" onChange={e => this.handleNumber(e)}/>
                                        </div>
                                        <div className="col-md-9 btnAndCount">
                                            <button type="button" onClick={e => this.addToCart(e)} value={item._id} className="btn btn-secondary btn-outline-success btn-block">
                                                <i className="fas fa-cart-plus"></i> Add 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Products;