//Depndencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClientController from "../../controllers/clientController";


class ClientUpdate extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }

        //con bind se optiene todo el objeto this de la clase
    }

    componentDidMount() {
        //   const urlProduct = 'http://localhost:3000/api/product/';
    }

    onOpen(e) {
        let API_URL = 'https://shopping-cart-api.herokuapp.com'
        let url = `${API_URL}/api/client/` || 'http://localhost:3000/api/client/';
        ClientController.getAllClients(url, res => {
            this.setState({
                data: res.body
            })
        })
    }

    render() {
        return (
            <div>
                <div className="alert alert-warning" role="alert">
                    <button className="btn btn-outline-warning darkYellow" onClick={e => this.onOpen(e)} type="button" data-toggle="collapse" data-target="#clientUpd" aria-expanded="false" aria-controls="clientUpd">
                        <i className="fas fa-edit"></i> Update a Client
                    </button>
                    <div className="collapse" id="clientUpd">
                        <div className="card card-body">
                            <ul className="list-group">
                                {this.state.data.map((client, key) => {
                                    return (
                                        <li className="list-group-item" key={key}>
                                            <div className="row">
                                                <div className="col-md-8 listSmall listLeft">
                                                    Name: {client.name} <br />
                                                    Last Name: {client.lastnamefa}<br />
                                                    Last Name: {client.lastnamemo}<br />
                                                    Birthdate: {client.birthdate}<br />
                                                    Address: {client.address}
                                                </div>
                                                <div className="col-md-4 listSmall listCenter">
                                                    <Link to={`/admin/updateClient/${client._id}`} className="darkYellow">
                                                        <button className="btn btn-outline-warning darkYellow" > Modify  </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ClientUpdate;