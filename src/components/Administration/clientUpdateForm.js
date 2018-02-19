//Depndencies
import React, { Component } from "react";
import ClientController from "../../controllers/clientController";

class ClientUpdateForm extends Component{

    constructor(){
        super();

        this.state = {
            data: [],
            name: "",
            lastnamefa: "",
            lastnamemo: "",
            birthdate: "",
            address: ""
        }
    }

    componentDidMount(){
        let url = `${process.env.API_URL}/api/client/${this.props.match.params.id}` || `http://localhost:3000/api/client/${this.props.match.params.id}`;
        ClientController.getClient(url, res => {
            this.setState({
                data: res.body,
                name: res.body.name,
                lastnamefa: res.body.lastnamefa,
                lastnamemo: res.body.lastnamemo,
                address: res.body.address
            })
        })
    }

    handleInputNamChanged(e){
        this.setState({
            name: e.target.value
        })
    }

    handleInputLNFAChanged(e){
        this.setState({
            lastnamefa: e.target.value
        })
    }

    handleInputLNMOChanged(e){
        this.setState({
            lastnamemo: e.target.value
        })
    }

    handleInputBirChanged(e){
        this.setState({
            birthdate: e.target.value
        })
    }

    handleInputAddChanged(e){
        this.setState({
            address: e.target.value
        })
    }

    modifyClient(e){
        let url =  `${process.env.API_URL}/api/client/${this.props.match.params.id}` || `http://localhost:3000/api/client/${this.props.match.params.id}`;
        ClientController.putClient(url, 
        {
            name: this.state.name || this.state.data.name,
            lastnamefa: this.state.lastnamefa || this.state.data.lastnamefa,
            lastnamemo: this.state.lastnamemo || this.state.data.lastnamemo,
            birthdate: this.state.birthdate || this.state.data.birthdate,
            address: this.state.address || this.state.data.address
        },
        ()=>{
            let url =`${process.env.API_URL}/api/client/${this.props.match.params.id}`|| `http://localhost:3000/api/client/${this.props.match.params.id}`;
            ClientController.getClient(url, res => {
                this.setState({
                    data: res.body
                })
            });
        });
    }

    render(){
        return(
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
                                                <h5 className="card-text">1st Last Name: <span className="text-muted"> {this.state.data.lastnamefa}</span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text">2nd Last Name: <span className="text-muted"> {this.state.data.lastnamemo}</span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text">Birthdate: <span className="text-muted"> {this.state.data.birthdate}</span></h5>
                                            </li>
                                            <li className="list-group-item">
                                                <h5 className="card-text">Address: <span className="text-muted"> {this.state.data.address}</span></h5>
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
                                                <label htmlFor="name">Name</label>
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
                                                <label htmlFor="lastnamefa">1st Last Name </label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control input-yellow" 
                                                        id="lastnamefa" 
                                                        value={this.state.lastnamefa} 
                                                        onChange={e => this.handleInputLNFAChanged(e)} 
                                                        placeholder="Enter a 1st last name" 
                                                    />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lastnamemo">2nd Last Name</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control input-yellow" 
                                                        id="lastnamemo" 
                                                        value={this.state.lastnamemo} 
                                                        onChange={e => this.handleInputLNMOChanged(e)} 
                                                        placeholder="Enter a 2nd last name" 
                                                    />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="birthdate">Birthdate</label>
                                                    <input 
                                                        type="Date"
                                                        max="1999-12-31" 
                                                        className="form-control input-yellow"
                                                        id="birthdate" 
                                                        value={this.state.birthdate} 
                                                        onChange={e => this.handleInputBirChanged(e)}
                                                    />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="addres">Address</label>
                                                    <input 
                                                        type="text" 
                                                        className="form-control input-yellow" 
                                                        id="addres" 
                                                        value={this.state.address} 
                                                        onChange={e => this.handleInputAddChanged(e)} 
                                                        placeholder="Enter a address" 
                                                    />
                                            </div>
                                            * All fields are required
                                    </div> 
                                    <div className="card-footer card-color-warning ">
                                        <button className="btn btn-outline-warning" onClick={e => this.modifyClient(e)} >Modify</button>
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

export default ClientUpdateForm;