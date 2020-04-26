import React, {Component} from 'react';
import {Badge, Card, Table} from "react-bootstrap";

export default class Report extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stauts: true
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
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className="text-center">
                                <th>#</th>
                                <th>รหัสเอกสาร</th>
                                <th>เรื่อง</th>
                                <th>เวลาสร้าง</th>
                                <th>เวลาแก้ไข</th>
                                <th>สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="align-middle">1</td>
                                <td className="align-middle">qeqwdasd</td>
                                <td className="align-middle">ขอรหัสผ่าน</td>
                                <td className="align-middle">10/1/2101</td>
                                <td className="align-middle">10/1/2101</td>
                                <td className="align-middle">
                                    {(!!this.state.status) ? <h4><Badge pill variant="danger">ไม่ผ่าน</Badge></h4>: null}
                                    {(!this.state.status) ? <h4><Badge pill variant="warning">แก้ไข</Badge></h4> : null}
                                    {(this.state.status) ? <h4><Badge pill variant="success">ผ่าน</Badge></h4> : null}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }

}
