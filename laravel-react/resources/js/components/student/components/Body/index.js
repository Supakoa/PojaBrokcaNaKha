import React, { Component } from "react";
import { Card } from "react-bootstrap";
import FormReport from "./bodys/FormReport";

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <Card.Body>
                    <br />
                    <FormReport />
                </Card.Body>
            </Card>
        );
    }
}

export default Main;
