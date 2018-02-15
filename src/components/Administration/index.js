//Depndencies
import React, { Component } from "react";

import ClientAdmin from "../Administration/client";
import ProductAdmin from "../Administration/product";


class Admin extends Component {

    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className="container">
                <br />
                <h1><i className="fas fa-edit"></i>  Administration</h1>
                <hr />

                <ProductAdmin></ProductAdmin>
                <ClientAdmin></ClientAdmin>

            </div>
        );
    }
}

export default Admin;