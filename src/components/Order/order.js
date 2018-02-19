//Depndencies
import React, { Component } from "react";
import OrderController from '../../controllers/orderController';

class Order extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        console.log("order id: ", id);
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        const url = `${API_URL}/api/order/${id}` || `http://localhost:3000/api/order/${id}`;
        OrderController.getOrder(url, res => {
            this.setState({
                data: res.body
            })
        })
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1>Order Details</h1>
                <hr />
                <div className="card border-dark mb-3" >
                    <div className="card-header"><h3>Client Information</h3></div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Name: 
                            <span className="text-muted"> {this.state.data.client_id ? this.state.data.client_id.name : ''} </span> 
                        </h5>
                        <h5 className="card-title">Father's Last Name: 
                            <span className="text-muted"> {this.state.data.client_id ? this.state.data.client_id.lastnamefa : ''} </span>
                        </h5>
                        <h5 className="card-title">Mother's Last Name: 
                            <span className="text-muted"> {this.state.data.client_id ? this.state.data.client_id.lastnamemo : ''} </span>
                        </h5>
                    </div>
                </div>

                
                <div className="card border-dark mb-3">
                    <div className="card-header"><h3>Products</h3></div>

                    {this.state.data.products ? this.state.data.products.map((product, key) => {
                        return (
                            <div className="card-body text-dark" key={key}> 
                                <h5 className="card-title">Name: 
                                    <span className="text-muted"> {product.name} </span> 
                                </h5>
                                <h5 className="card-title">Description: 
                                    <span className="text-muted"> {product.description} </span> 
                                </h5>
                                <h5 className="card-title">Price: 
                                    <span className="text-muted"> {product.price} </span> 
                                </h5>
                                <h5 className="card-title">Quantity: 
                                    <span className="text-muted"> {product.quantity} </span>
                                    {/*<span className="text-muted"> {this.state.data.products ? this.state.data.products[key].quantity : ''} </span> */ }
                                </h5>
                            </div>
                        );
                        }) : ''
                    }
                </div>

                <div className="card border-dark mb-3" >
                    <div className="card-header"><h3>Order Information</h3></div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Status: <span className="text-muted"> {this.state.data.status} </span> </h5>
                        <h5 className="card-title">Created At: <span className="text-muted"> {this.state.data.created_at} </span> </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;