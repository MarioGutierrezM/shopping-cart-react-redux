//Depndencies
import React, { Component } from "react";
import ClientController from "../../controllers/clientController";
//Sweet alert
import swal from 'sweetalert';

class ClientCreate extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            lastnamefa: "",
            lastnamemo: "",
            birthdate: "",
            address: "",
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false
        }

        //con bind se optiene todo el objeto this de la clase
        this.postClient = this.postClient.bind(this);
        this.clearClient = this.clearClient.bind(this);
    }

    componentDidMount() {
        //   const urlProduct = 'http://localhost:3000/api/product/';
    }

    clearClient(e) {
        this.setState({
            name: "",
            lastnamefa: "",
            lastnamemo: "",
            birthdate: "",
            address: "",
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false
        });
    }

    postClient(e) {
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        const urlClient = `${API_URL}/api/client/` || 'http://localhost:3000/api/client/';
        ClientController.postClient(urlClient,
            {
                name: this.state.name,
                lastnamefa: this.state.lastnamefa,
                lastnamemo: this.state.lastnamemo,
                birthdate: this.state.birthdate,
                address: this.state.address
            }
        );
        swal({
            title: "Good job!",
            text: "Client has been created!",
            icon: "success",
        });
    }

    handleNameInputChanged(e) {
        this.setState({
            name: e.target.value,
            show1: true
        });
    }

    handleLast1InputChanged(e) {
        this.setState({
            lastnamefa: e.target.value,
            show2: true
        });
    }

    handleLast2InputChanged(e) {
        this.setState({
            lastnamemo: e.target.value,
            show3: true
        });
    }

    handleBirthInputChanged(e) {
        this.setState({
            birthdate: e.target.value,
            show4: true
        });
    }

    handleAddressInputChanged(e) {
        this.setState({
            address: e.target.value,
            show5: true
        });
    }

    render() {
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    <div>
                        {/*Button trigger modal */}
                        <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#createClientModal">
                            <i className="fas fa-plus"></i> Create a client
                        </button>

                        {/*Modal */}
                        <div className="modal fade" id="createClientModal" tabIndex="-1" role="dialog" aria-labelledby="createClientModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header modal-color-success">
                                        <h5 className="modal-title" id="createClientModalLabel">
                                            <i className="fas fa-plus"></i> Create a Client
                                        </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="nameC">First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control input-green"
                                                    id="nameC"
                                                    value={this.state.name}
                                                    onChange={e => this.handleNameInputChanged(e)}
                                                    placeholder="Enter first name"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastnameFC">Father's Last Name </label>
                                                {
                                                    this.state.show1
                                                        ? <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="lastnameFC"
                                                            value={this.state.lastnamefa}
                                                            onChange={e => this.handleLast1InputChanged(e)}
                                                            placeholder="Enter a father's lastname"
                                                        />
                                                        : <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="lastnameFC"
                                                            value={this.state.lastnamefa}
                                                            onChange={e => this.handleLast1InputChanged(e)}
                                                            placeholder="Enter a father's lastname"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastnameMC">Mother's Last Name</label>
                                                {
                                                    this.state.show2
                                                        ? <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="lastnameMC"
                                                            value={this.state.lastnamemo}
                                                            onChange={e => this.handleLast2InputChanged(e)}
                                                            placeholder="Enter mother's last name"
                                                        />
                                                        : <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="lastnameMC"
                                                            value={this.state.lastnamemo}
                                                            onChange={e => this.handleLast2InputChanged(e)}
                                                            placeholder="Enter mother's last name"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="birthdateC">Birthdate</label>
                                                {
                                                    this.state.show3
                                                        ? <input
                                                            type="Date"
                                                            max="1999-12-31"
                                                            className="form-control input-green"
                                                            id="birthdateC"
                                                            value={this.state.birthdate}
                                                            onChange={e => this.handleBirthInputChanged(e)}
                                                            placeholder="Enter  YYYY-MM-DD"
                                                        />
                                                        : <input
                                                            type="Date"
                                                            max="1999-12-31"
                                                            className="form-control input-green"
                                                            id="birthdateC"
                                                            value={this.state.birthdate}
                                                            onChange={e => this.handleBirthInputChanged(e)}
                                                            placeholder="Enter  YYYY-MM-DD"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="addressC">Address</label>
                                                {
                                                    this.state.show4
                                                        ? <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="addressC"
                                                            value={this.state.address}
                                                            onChange={e => this.handleAddressInputChanged(e)}
                                                            placeholder="Enter an address"
                                                        />
                                                        : <input
                                                            type="text"
                                                            className="form-control input-green"
                                                            id="addressC"
                                                            value={this.state.address}
                                                            onChange={e => this.handleAddressInputChanged(e)}
                                                            placeholder="Enter an address"
                                                            disabled
                                                        />
                                                }
                                            </div>
                                            * All fields are required
                                        </form>

                                    </div>
                                    <div className="modal-footer modal-color-success">
                                        <button type="button" onClick={this.clearClient} className="btn btn-outline-secondary" data-dismiss="modal">
                                            Close
                                        </button>
                                        {
                                            this.state.show1 && this.state.show2 && this.state.show3 && this.state.show4 && this.state.show5
                                                ? <button
                                                    onClick={this.postClient}
                                                    id="newClientMade"
                                                    className="btn btn-outline-success">Save</button>

                                                : <button
                                                    onClick={this.postClient}
                                                    id="newClientMade"
                                                    className="btn btn-outline-success"
                                                    disabled>Save</button>
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

export default ClientCreate;