//Depndencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import productController from "../../controllers/productController";
//import OrderController from "../../controllers/orderController";

//To Redux
import { connect } from "react-redux";
import { addOneProduct } from "../../redux/actions/cartActions";


class Products extends Component {

    constructor() {
        super();

        this.state = {
            data: [],
            newOrder: [],
            quantity: 0,
            pagination: 0
        }
    }

    componentDidMount() {
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        const url = `${API_URL}/api/product?category=&name=&page=${this.state.pagination}&items=6` || 'http://localhost:3000/api/product';
        productController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            })
        });
    }

    async addToCart(e) {
        console.log("Id added", e.target.value);
        await this.props.addOneProduct({
            product: e.target.value,
            quantity: (this.state.quantity > 0) ? this.state.quantity : 1
        });
    }

    handleNumber(e) {
        this.setState({
            quantity: Number(e.target.value)
        })
    }

    async handlePaginationPrev(e) {
        if (this.state.pagination === 0) {
            let API_URL = 'https://shopping-cart-api.herokuapp.com'
            let url = `${API_URL}/api/product?category=&name=&page=${this.state.pagination}&items=6` || 'http://localhost:3000/api/product';
            productController.getAllProducts(url, res => {
                this.setState({
                    data: res.body
                });
            });
        } else {
            await this.setState({
                pagination: this.state.pagination - 1
            });
            let API_URL = 'https://shopping-cart-api.herokuapp.com'
            let url = `${API_URL}/api/product?category=&name=&page=${this.state.pagination}&items=6` || 'http://localhost:3000/api/product';
            productController.getAllProducts(url, res => {
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
        let url = `${API_URL}/api/product?category=&name=&page=${this.state.pagination}&items=6` || 'http://localhost:3000/api/product';
        productController.getAllProducts(url, res => {
            this.setState({
                data: res.body
            });
        });
    }

    render() {
        return (
            <div className="container">
                <br />
                <h1><i className="fas fa-tags"></i> Products</h1>
                <hr />

                <div className="card-columns">
                    {this.state.data.map((item, key) => {
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
                                            <input className="form-control border-green"
                                                type="number"
                                                max="10"
                                                min="1"
                                                onChange={e => this.handleNumber(e)}
                                            />
                                        </div>
                                        <div className="col-md-9 btnAndCount">
                                            <button
                                                type="button"
                                                onClick={e => this.addToCart(e)}
                                                value={item._id}
                                                className="btn btn-secondary btn-outline-success btn-block"
                                            >
                                                <i className="fas fa-cart-plus"></i> Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination pag-center">
                            <li className="page-item"><a className="page-link" onClick={e => this.handlePaginationPrev(e)}>Previous</a></li>
                            <li className="page-item disabled"><a className="page-link" >{this.state.pagination + 1}</a></li>
                            <li className="page-item"><a className="page-link" onClick={e => this.handlePaginationNext(e)}>Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOneProduct: (obj) => {
            dispatch(addOneProduct(obj));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
//export default Products;