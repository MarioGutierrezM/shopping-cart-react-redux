//Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
//Controllers
import ProductController from "../../controllers/productController";
import OrderController from "../../controllers/orderController";
//Redux
import { connect } from "react-redux";
import { deleteAllProducts, deleteOneProduct, modifyQuantity } from "../../redux/actions/cartActions";
//Sweet alert
import swal from 'sweetalert';
import { setTimeout } from "timers";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: "",
            preOrder: [],
            data: [], //para mostrar despues de la consulta individual con toda la info de los objetos
            quaPro: 0
        }
    }

    componentDidMount() {
        this.setState({
            //clientId: "5a83241a5c3f0506574698e5", //mac
            clientId: "5a8b19db8a6a5d00151df52e", //heroku
            //clientId: "5a80a1b56f68da0890fd4555", //casa
            preOrder: this.props.cartReducer.cart,  //guarda lo que llega en redux, solo lo uso para la cantidad y crear la orden
        });
        //consulta para poder mostrar mas informacion de cada producto 
        let prodTemp = [];
        let i = 0;
        for (i in this.props.cartReducer.cart) {
            //console.log("i", i, this.props.cartReducer.cart[i]);
            let id = `${this.props.cartReducer.cart[i].product}`;
            let API_URL = 'https://shopping-cart-api.herokuapp.com'
            let url = `${API_URL}/api/product/${id}` || `http://localhost:3000/api/product/${id}`;
            ProductController.getProduct(url, res => {
                prodTemp.push(res.body);
                console.log("data", prodTemp);
                this.setState({
                    data: prodTemp
                });
            });
        }
    }

    newOrder(e) {
        let order = {
            products: this.props.cartReducer.cart,
            client_id: this.state.clientId
        };
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        let url = `${API_URL}/api/order/` || 'http://localhost:3000/api/order/';
        OrderController.postOrder(url, order, res => {
            if (res.body == null) {
                swal({
                    title: "OPS!",
                    text: "Some product is Out of Stock, you need to make your order again!",
                    icon: "warning",
                });
                this.props.deleteAllProducts();
                this.setState({
                    data: [],
                    preOrder: []
                });
            } else {
                swal({
                    title: "Good job!",
                    text: "Order has been done!",
                    icon: "success",
                });
                this.props.deleteAllProducts();
                this.setState({
                    data: [],
                    preOrder: []
                });
            }
        });
    }

    cancelOrder(e) {
        this.props.deleteAllProducts();
        this.setState({
            data: [],
            preOrder: this.props.cartReducer.cart,  //ya llega limpio
        })
    }

    deleteProduct(e) {
        this.props.deleteOneProduct(e.target.value);
        setTimeout(() => {
            let prodTemp = [];
            let i = 0;
            if (this.props.cartReducer.cart.length > 0) {
                //console.log("with data", this.props.cartReducer.cart.length);
                for (i in this.props.cartReducer.cart) {
                    let id = `${this.props.cartReducer.cart[i].product}`;
                    let API_URL = 'https://shopping-cart-api.herokuapp.com'
                    let url = `${API_URL}/api/product/${id}` || `http://localhost:3000/api/product/${id}`;
                    ProductController.getProduct(url, res => {
                        prodTemp.push(res.body);
                        console.log("data", prodTemp);
                        this.setState({
                            data: prodTemp,
                            preOrder: this.props.cartReducer.cart
                        });
                    });
                }
            } else {
                this.setState({
                    data: [],
                    preOrder: []
                });
            }
        }, 1000);
    }

    handleNumber(e){
        this.setState({
            quaPro: e.target.value
        });
    }

    changeQuantity(e){
        let newObj = {
           product: e.target.value,
           quantity: Number(this.state.quaPro)
        };
        this.props.deleteOneProduct(e.target.value);
        this.props.modifyQuantity(newObj);
        setTimeout(()=>{
            let prodTemp = [];
            let i = 0;
            if (this.props.cartReducer.cart.length > 0) {
                //console.log("with data", this.props.cartReducer.cart.length);
                for (i in this.props.cartReducer.cart) {
                    let id = `${this.props.cartReducer.cart[i].product}`;
                    let API_URL = 'https://shopping-cart-api.herokuapp.com'
                    let url = `${API_URL}/api/product/${id}` || `http://localhost:3000/api/product/${id}`;
                    ProductController.getProduct(url, res => {
                        prodTemp.push(res.body);
                        console.log("data", prodTemp);
                        this.setState({
                            data: prodTemp,
                            preOrder: this.props.cartReducer.cart,
                            quaPro: 0
                        });
                    });
                }
            } else {
                this.setState({
                    data: [],
                    preOrder: []
                });
            }
        },1000)
    }


    render() {
        return (
            <div className="container">
                <br />
                <h1><i className="fas fa-shopping-cart"></i> Shopping Cart </h1>
                <hr />
                <div className="row">

                    <div className="col-md-8 join-list">
                        {this.state.data.map((item, key) => {
                            return (

                                <ul key={key} className="list-group">
                                    <li className="list-group-item data-Center">
                                        <div className="row align-items-center">
                                            <div className="col-2">
                                                <button className="btn btn-outline-danger" onClick={e => this.deleteProduct(e)} value={item._id}>
                                                    Delete
                                                </button>
                                            </div>
                                            <div className="col-md-2">
                                                <img className="imgSmall" src={item.imageUrl} alt="" />
                                            </div>
                                            <div className="col-4">
                                                <h5>
                                                    Name: <span className="text-muted">{item.name} </span>
                                                </h5>
                                            </div>
                                            <div className="col-4">
                                                <h5>
                                                    Category: <span className="text-muted">{item.category}</span>
                                                </h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>

                    <div className="col-md-2 join-list">
                        {this.state.preOrder.map((quantity, key2) => {
                            return (
                                <ul key={key2} className="list-group">
                                    <li className="list-group-item li-quantity data-Center">
                                        <span className="badge badge-warning badge-pill">
                                            Quantity: {quantity.quantity}
                                        </span>
                                        <input
                                            className="form-control border-yellow" 
                                            type="number"
                                            onChange={e => this.handleNumber(e)} 
                                        />
                                        <button
                                            className="btn btn-outline-warning button-margin"
                                            value={quantity.product}
                                            onClick={e=>this.changeQuantity(e)}
                                        >
                                            Modify
                                        </button>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>

                    <div className="col-md-2 data-Center">
                        <Link to={'/products'}>
                            <button className="btn btn-outline-info">
                                <i className="fas fa-plus"></i> Buy more
                            </button>
                        </Link>
                        <br /><br />
                        <Link to={'/products'}>
                            <button className="btn btn-outline-danger" onClick={e => this.cancelOrder(e)}>
                                <i className="fas fa-minus-circle"></i> Cancel Order
                            </button>
                        </Link>
                        <br /><br />
                        <button className="btn btn-outline-success" onClick={e => this.newOrder(e)}>
                            <i className="fas fa-check-circle"></i> Confirm Order
                        </button>
                        <br /><br />
                        <h1><i className="fab fa-cc-visa"></i></h1>
                        <h1><i className="fab fa-cc-mastercard"></i></h1>
                        <h1><i className="fas fa-credit-card"></i></h1>
                        <h1><i className="fab fa-cc-paypal"></i></h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAllProducts: (obj) => {
            dispatch(deleteAllProducts(obj));
        },
        deleteOneProduct: (productID) => {
            dispatch(deleteOneProduct(productID));
        },
        modifyQuantity: (newObj) => {
            dispatch(modifyQuantity(newObj));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

//export default ShoppingCart;

/* --------------------- PENDIENTE -------------------


-limpiar todo lo no necesario
-eliminar ordenes
-corregir al eliminar productos y clientes en pagina administracion: que no quede uno al final



--------------------LISTO CON REDUX --------------------------
- CONFIRMAR QUE AL REGRESAR o NAVEGAR NO SE PIERDAN LOS PRODUCTOS 
- ELIMINAR EN CASO DE NO QUERER PRODUCTO Y ACTUALIZAR lista
-CANCELAR ORDEN Y LIMPIAR TODO
-MOSTRAR CANTIDAD DE PRODUCTOS
-mandar 1 producto minimo


-armar la orden
- al dar click en confirmar orden, limpiar arreglo u objeto
- VALIDAR AL PEDIR MAS PRODUCTOS DEL STOCK, MOSTRAR MENSAJE
-SI SE COMPRA EL MISMO PRODUCTO, no agregarlo  
-poder modificar la cantidad desde el cart


-quitar lista de roots

*/