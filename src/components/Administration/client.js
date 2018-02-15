//Depndencies
import React, { Component } from "react";

import ClientCreate from "../Administration/clientCreate";
import ClientUpdate from "../Administration/clientUpdate";
import ClientDelete from "../Administration/clientDelete";

class ClientAdm extends Component {

    render(){
        return (
            <div>
                <br />
                <h3>Clients</h3>
                <hr />

                <ClientCreate></ClientCreate>
                <ClientUpdate></ClientUpdate>
                <ClientDelete></ClientDelete>
            </div>
        )
    }

}

export default ClientAdm;