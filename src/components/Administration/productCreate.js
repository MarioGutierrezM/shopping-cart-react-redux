//Depndencies
import React, { Component } from "react";
import ProductController from "../../controllers/productController";
//Sweet alert
import swal from 'sweetalert';

class ProductCreate extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            description: "",
            category: "",
            stock: "",
            price: "",
            imageUrl: "",
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false
        }

        //con bind se optiene todo el objeto this de la clase
        this.postProduct = this.postProduct.bind(this);
        this.clearProduct = this.clearProduct.bind(this);
    }

    componentDidMount() {
    }

    clearProduct(e) {
        this.setState({
            name: "",
            description: "",
            category: "",
            stock: 0,
            price: 0,
            imageUrl: "",
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false
        });
    }

    postProduct(e) {
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        const url = `${API_URL}/api/product/` || 'http://localhost:3000/api/product/';
        ProductController.postProduct(url,
            {
                name: this.state.name,
                description: this.state.description,
                category: this.state.category,
                stock: Number(this.state.stock),
                price: Number(this.state.price),
                imageUrl: this.state.imageUrl
            }
        );
        swal({
            title: "Good job!",
            text: "Product has been created!",
            icon: "success",
        });
    }

    handleNameInputChanged(e) {
        this.setState({
            name: e.target.value,
            show1: true
        })
    }

    handleDescriptionInputChanged(e) {
        this.setState({
            description: e.target.value,
            show2: true
        })
    }

    handleCategoryInputChanged(e) {
        this.setState({
            category: e.target.value,
            show3: true
        })
    }

    handleStockInputChanged(e) {
        this.setState({
            stock: e.target.value,
            show4: true
        })
    }

    handlePriceInputChanged(e) {
        this.setState({
            price: e.target.value,
            show5: true
        })
    }

    handleImageUrlInputChanged(e) {
        this.setState({
            imageUrl: e.target.value,
            show6: true
        })
    }

    render() {
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    <div>
                        {/*Button trigger modal */}
                        <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#createProductModal">
                            <i className="fas fa-plus"></i> Create a Product
                        </button>

                        {/*Modal */}
                        <div className="modal fade" id="createProductModal" tabIndex="-1" role="dialog" aria-labelledby="createProductModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header modal-color-success">
                                        <h5 className="modal-title" id="createProductModalLabel">
                                            <i className="fas fa-plus"></i> Create a Product
                                        </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="name">Product Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control input-green"
                                                    id="name"
                                                    value={this.state.name}
                                                    onChange={e => this.handleNameInputChanged(e)}
                                                    placeholder="Enter a name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Product Description </label>
                                                {
                                                    this.state.show1
                                                        ? <textarea
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="description"
                                                            value={this.state.description}
                                                            onChange={e => this.handleDescriptionInputChanged(e)}
                                                            placeholder="Enter a description"
                                                        />
                                                        : <textarea
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="description"
                                                            value={this.state.description}
                                                            onChange={e => this.handleDescriptionInputChanged(e)}
                                                            placeholder="Enter a description"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="category">Product Category</label>
                                                {
                                                    this.state.show2
                                                        ? <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="category"
                                                            value={this.state.category}
                                                            onChange={e => this.handleCategoryInputChanged(e)}
                                                            placeholder="Enter a category"
                                                        />
                                                        : <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="category"
                                                            value={this.state.category}
                                                            onChange={e => this.handleCategoryInputChanged(e)}
                                                            placeholder="Enter a category"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="stock">Product Stock</label>
                                                {
                                                    this.state.show3
                                                        ? <input
                                                            type="number"
                                                            className="form-control input-green"
                                                            id="stock"
                                                            value={this.state.stock}
                                                            onChange={e => this.handleStockInputChanged(e)}
                                                            placeholder="Enter the stock"
                                                        />
                                                        : <input
                                                            type="number"
                                                            className="form-control input-green"
                                                            id="stock"
                                                            value={this.state.stock}
                                                            onChange={e => this.handleStockInputChanged(e)}
                                                            placeholder="Enter the stock"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="price">Product Price</label>
                                                {
                                                    this.state.show4
                                                        ? <input
                                                            type="number"
                                                            className="form-control input-green"
                                                            id="price"
                                                            value={this.state.price}
                                                            onChange={e => this.handlePriceInputChanged(e)}
                                                            placeholder="Enter a price"
                                                        />
                                                        : <input
                                                            type="number"
                                                            className="form-control input-green"
                                                            id="price"
                                                            value={this.state.price}
                                                            onChange={e => this.handlePriceInputChanged(e)}
                                                            placeholder="Enter a price"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="urlImage">Product Image</label>
                                                {
                                                    this.state.show5
                                                        ? <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="urlImage"
                                                            value={this.state.imageUrl}
                                                            onChange={e => this.handleImageUrlInputChanged(e)}
                                                            placeholder="Enter a url"
                                                        />
                                                        : <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="urlImage"
                                                            value={this.state.imageUrl}
                                                            onChange={e => this.handleImageUrlInputChanged(e)}
                                                            placeholder="Enter a url"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            * All fields are required
                                        </form>

                                    </div>
                                    <div className="modal-footer modal-color-success">
                                        <button type="button" onClick={this.clearProduct} className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                        {
                                            this.state.show1 && this.state.show2 && this.state.show3 && this.state.show4 && this.state.show5 && this.state.show6
                                                ? <button
                                                    onClick={this.postProduct}
                                                    id="newProductMade"
                                                    className="btn btn-outline-success" >Save</button>
                                                : <button
                                                    onClick={this.postProduct}
                                                    id="newproductMade"
                                                    className="btn btn-outline-success"
                                                    disabled> Save</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCreate;