//Depndencies
import React, { Component } from "react";
import ProductController from "../../controllers/productController";

class ProductUpdateModal extends Component {

    constructor() {
        super();

        this.state = {
            data: [],
            newModify: {},
            name: "",
            description: "",
            category: "",
            stock: 0,
            price: 0,
            imageUrl: ""
        }
    }

    componentDidMount() {
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        let url = `${API_URL}/api/product/${this.props.match.params.id}` || `http://localhost:3000/api/product/${this.props.match.params.id}`;
        ProductController.getProduct(url, res => {
            this.setState({
                data: res.body,
                name: res.body.name,
                description: res.body.description,
                category: res.body.category,
                stock: res.body.stock,
                price: res.body.price,
                imageUrl: res.body.imageUrl
            })
        });
    }

    clearProduct(e) {
        this.setState({
            name: "",
            description: "",
            category: "",
            stock: 0,
            price: 0,
            imageUrl: ""
        });
    }

    handleInputNamChanged(e){
        this.setState({
            name: e.target.value
        })
    }

    handleInputDesChanged(e){
        this.setState({
            description: e.target.value
        })
    }

    handleInputCatChanged(e){
        this.setState({
            category: e.target.value
        })
    }

    handleInputStoChanged(e){
        this.setState({
            stock: e.target.value
        })
    }

    handleInputPriChanged(e){
        this.setState({
            price: e.target.value
        })
    }

    handleInputImgChanged(e){
        this.setState({
            imageUrl: e.target.value
        })
    }

    modifyProduct(e){
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        let url = `${API_URL}/api/product/${this.props.match.params.id}` || `http://localhost:3000/api/product/${this.props.match.params.id}`;
        ProductController.putProduct(url, 
            {
                name: this.state.name || this.state.data.name,
                description: this.state.description || this.state.data.description,
                category: this.state.category || this.state.data.category,
                stock: this.state.stock || this.state.data.stock,
                price: this.state.price || this.state.data.price,
                imageUrl: this.state.imageUrl || this.state.data.imageUrl
            },
            () => {
                ProductController.getProduct(url, res => {
                    this.setState({
                        data: res.body
                    })
                });
            }
        );
    }

    render() {
        return (
            <div className="container">
                <br />
                <h2><i className="fas fa-edit"></i> Modify a Product</h2>
                <hr />

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header card-color-warning ">
                                        <h3 className="card-title">Current Information</h3>
                                    </div>
                                    <div className="card-body">

                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <h5 className="card-text">Name: <span className="text-muted"> {this.state.data.name} </span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text">Description: <span className="text-muted"> {this.state.data.description}</span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text">Category: <span className="text-muted"> {this.state.data.category}</span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text">Stock: <span className="text-muted"> {this.state.data.stock}</span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text">Price: <span className="text-muted"> {this.state.data.price}</span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text">ImageUrl: <span className="text-muted"> {this.state.data.imageUrl}</span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text imgCenter"><img className="text-muted imgMedWidth" src={this.state.data.imageUrl} alt=""/></h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header card-color-warning ">
                                        <h3 className="card-title">New Information</h3>
                                    </div>
                                    <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Product Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control input-yellow" 
                                                    id="name" 
                                                    value={this.state.name} 
                                                    onChange={e => this.handleInputNamChanged(e)} 
                                                    placeholder="Enter a name" 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Product Description </label>
                                                    <textarea 
                                                        type="text" 
                                                        className="form-control input-yellow" 
                                                        id="description" 
                                                        value={this.state.description} 
                                                        onChange={e => this.handleInputDesChanged(e)} 
                                                        placeholder="Enter a description" 
                                                    /> 
                                                    {/*: <input type="text" className="form-control input-yellow" id="lastnameFC" value={this.state.productModify.lastnamefa} onChange={e => this.handleInputChanged(e)} placeholder="Enter a father's lastname" disabled/> another form*/}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="category">Product Category</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control input-yellow" 
                                                        id="category" 
                                                        value={this.state.category} 
                                                        onChange={e => this.handleInputCatChanged(e)} 
                                                        placeholder="Enter a category" 
                                                    />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="stock">Product Stock</label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control input-yellow"
                                                        id="stock" 
                                                        value={this.state.stock} 
                                                        onChange={e => this.handleInputStoChanged(e)} 
                                                        placeholder="Enter the stock" 
                                                    />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="price">Product Price</label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control input-yellow" 
                                                        id="price" 
                                                        value={this.state.price} 
                                                        onChange={e => this.handleInputPriChanged(e)} 
                                                        placeholder="Enter a price" 
                                                    />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="urlImage">Product Image</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control input-yellow" 
                                                        id="urlImage" 
                                                        value={this.state.imageUrl} 
                                                        onChange={e => this.handleInputImgChanged(e)} 
                                                        placeholder="Enter a url" 
                                                    />
                                            </div>
                                            * All fields are required
                                    </div> 
                                    <div className="card-footer card-color-warning ">
                                        <button className="btn btn-outline-warning" onClick={e => this.modifyProduct(e)} >Modify</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default ProductUpdateModal;