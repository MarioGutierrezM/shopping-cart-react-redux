//Depndencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import OrderController from "../../controllers/orderController";


class Orders extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        const url = `${API_URL}/api/order/` || 'http://localhost:3000/api/order';
        OrderController.getAllOrders(url, res => {
            this.setState({
                data: res.body
            })
        });
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1><i className="fas fa-tasks"></i> Orders</h1>
                <hr />

                {this.state.data.map((order, key) => {
                    return (
                        <div className="card border-dark mb-3" key={key} >
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-10"> <h4>Order #{key+1}</h4> </div>
                                    <div className="col-md-2">
                                        <Link to={`/order/${order._id}`}> 
                                            <button type="button" className="btn btn-outline-info"><i className="fas fa-info-circle"></i> Details</button>
                                        </Link>
                                    </div>
                                </div> 
                                
                            </div>
                            <div className="card-body text-dark">
                                <h5 className="card-title">Date: {order.created_at}</h5>
                                <h5 className="card-title">Status: {order.status}</h5>
                                <p className="card-text">Number of products: {order.products.length}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Orders;