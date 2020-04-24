import React, {useState, Component} from 'react';
import {Button, Card, Table} from "react-bootstrap";
import {StepEdit, StepDelete} from "./modalCRUD/StepreportCRUD";

export default class StepReport extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false ,
            eiei : "eiei"
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        }



    showModal(){
        alert("show");
        this.setState({
           eiei : "kuy",
            show : true
        })
    }

    closeModal(){
        this.setState({show : false})
    }



    render(){
        // const [stepEdit, setStepEdit] = useState(false);
        // var [stepDelete, setStepDelete] = useState(false);
        return(
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        ตั้งค่า ขั้นตอนเอกสาร
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped hover responsive bordered>
                        <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>รูปแบบเอกสาร</th>
                            <th>ID</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-center">
                            <td className="align-middle">1</td>
                            <td className="align-middle">เอกสารขอขึ้นสอบ {this.state.show}</td>
                            <td className="align-middle">DE - 2019 {this.state.eiei} </td>
                            <td className="align-middle">
                                <Button variant="warning" size="sm" className="text-light" onClick = {this.showModal} >
                                    แก้ไข
                                </Button>{' '}
                                <Button size="sm" variant="danger" >
                                    ลบ
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <StepEdit show={this.state.show} onHide={this.closeModal}  />
                    {/*<StepEdit show={this.state.modalShow} onHide={this.handleCloseModal()} />*/}
                    {/*<StepDelete name="modalDelete" show={this.state.modalShow} onHide={this.HandleClickModal(false)} />*/}
                </Card.Body>
            </Card>
        );
    }

}
