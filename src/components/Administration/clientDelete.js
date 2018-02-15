//Depndencies
import React, { Component } from "react";
import ClientController from "../../controllers/clientController";


class ClientDelete extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }

        // con bind se optiene todo el objeto this de la clase
        this.openModal = this.openModal.bind(this);
        this.deleteclient = this.deleteclient.bind(this);
    }

    componentDidMount() {
    }

    openModal(e){
        let url = 'http://localhost:3000/api/client/';
        ClientController.getAllClients(url, res => {
            this.setState({
                data: res.body
            })
        })
    }

    deleteclient(e){
        let url = `http://localhost:3000/api/client/${e.target.value}`;
        ClientController.deleteClient(url);
        ClientController.clearList(e.target.value, this.state.data, newData => {
            this.setState({
                data: newData
            })
        });

    }

    render() {
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    {/* <!-- Button trigger modal -->*/}
                    <button type="button" onClick={this.openModal} className="btn btn-outline-danger" data-toggle="modal" data-target="#deleteClientModal">
                        <i className="fas fa-trash-alt"></i> Delete a Client
                    </button>

                    {/*<!-- Modal --> */}
                    <div className="modal fade" id="deleteClientModal" tabIndex="-1" role="dialog" aria-labelledby="deleteClientModalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header modal-color-danger">
                                    <h5 className="modal-title" id="deleteClientModalLongTitle">
                                        <i className="fas fa-trash-alt"></i> Delete a Client
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group">
                                    {
                                        this.state.data.map((client, key) => {
                                            return (
                                                <li className="list-group-item" key={key}>
                                                    <div className="row">
                                                        <div className="col-md-8 listLeft listCenter">
                                                            Name: {client.name} <br/>
                                                            Last Names: {client.lastnamefa} {client.lastnamemo}
                                                        </div>
                                                        <div className="col-md-4 listSmall listCenter">
                                                            <button className="btn btn-outline-danger" value={client._id} onClick={this.deleteclient}> Delete </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                                <div className="modal-footer modal-color-danger">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientDelete;