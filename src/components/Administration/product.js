//Depndencies
import React, { Component } from "react";

import ProductCreate from "../Administration/productCreate";
import ProductUpdate from "../Administration/productUpdate";
import ProductDelete from "../Administration/productDelete";

class ProductAdm extends Component {

    render() {
        return (
            <div>
                <br />
                <h3>Products</h3>
                <hr />

                <ProductCreate></ProductCreate>
                <ProductUpdate></ProductUpdate>
                <ProductDelete></ProductDelete>
            </div>
        );
    }

}

export default ProductAdm;