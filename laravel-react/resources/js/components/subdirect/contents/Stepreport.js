import React, {Component} from 'react';
import {Button, Card, Table} from "react-bootstrap";
import {StepEdit, StepDelete} from "./modalCRUD/StepreportCRUD";

export default class StepReport extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false ,
            modal: '',
            display: null
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.modalDisplay = this.modalDisplay.bind(this);
        }



    showModal(event){
        this.setState({
            ...this.state,
            show : true,
            modal: event.target.name
        });
        this.modalDisplay(event.target.name);

    }

    modalDisplay(e){
        if (e === 'edit'){
            this.setState({
                display: true
            })
        }else if (e === 'delete'){
            this.setState({
                display: false
            })
        }
    }

    closeModal(){
        this.setState({show : false})
    }



    render(){
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
                            <td className="align-middle">เอกสารขอขึ้นสอบ</td>
                            <td className="align-middle">DE - 2019 </td>
                            <td className="align-middle">
                                <Button variant="warning" name="edit" size="sm" className="text-light" onClick = {this.showModal} >
                                    แก้ไข
                                </Button>{' '}
                                <Button size="sm" name="delete" variant="danger" onClick = {this.showModal} >
                                    ลบ
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                {
                    (this.state.display)
                    ? <StepEdit show={this.state.show} onHide={this.closeModal} />
                    : <StepDelete show={this.state.show} onHide={this.closeModal} />
                }


            </Card>
        );
    }

}
