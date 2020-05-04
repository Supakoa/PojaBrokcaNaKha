import React, {Component} from 'react';
import {Badge, Card, Table} from "react-bootstrap";
import TableReport from "./tableData/TableReport";

export default class Report extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stauts: true,

        }
    }

    render() {
        return(
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        ค้นหาเอกสาร
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <TableReport />
                </Card.Body>
            </Card>
        );
    }

}
