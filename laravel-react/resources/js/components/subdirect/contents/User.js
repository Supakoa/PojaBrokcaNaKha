import React, {Component, useState} from 'react';
import {Button, Card, Table} from 'react-bootstrap';
import {Useradd, Userdelete, Useredit} from "./modalCRUD/Usercrud";

export default class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal:{
                name:'',
                show: false,
            }
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    showModal(event){
        this.setState({
            ...this.state.modal,
            modal:{name:event.target.name, show:true}
        })
    }

    closeModal(){
        this.setState({modal:{name:'', show:false}})
    }

    render() {
        return(
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        สมาชิก
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover responsive>
                        <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>ชื่อ-สกลุ</th>
                            <th>ประเภท</th>
                            <th>อีเมล</th>
                            <th>เบอร์โทรศัพท์</th>
                            <th>คณะ</th>
                            <th>สาขา</th>
                            <th className="text-center">
                                <Button name="modalAdd" variant="info" size="sm" onClick={this.showModal}  >
                                    เพิ่ม
                                </Button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-center">
                            <td className="align-middle">1</td>
                            <td className="align-middle">Supakit Kitjanabumrungsak</td>
                            <td className="align-middle">Addmin</td>
                            <td className="align-middle">Koa@gmail.com</td>
                            <td className="align-middle">0922595281</td>
                            <td className="align-middle">เทคโนโยลีอุสาหกรรม </td>
                            <td className="align-middle">วิศวกรรมคอมพิวเตอร์ </td>
                            <td className="align-middle">
                                <Button className="m-auto" name="modalEdit" variant="warning" size="sm" onClick={this.showModal} >
                                    แก้ไข
                                </Button>{' '}
                                <Button className="m-auto" name="modalDelete" variant="danger" size="sm" onClick={this.showModal} >
                                    ลบ
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    {(this.state.modal.name === 'modalAdd') ? <Useradd show={this.state.modal.show} onHide={this.closeModal} /> : null}
                    {(this.state.modal.name === 'modalEdit') ? <Useredit show={this.state.modal.show} onHide={this.closeModal} />: null}
                    {(this.state.modal.name === 'modalDelete') ? <Userdelete show={this.state.modal.show} onHide={this.closeModal} /> : null }

                </Card.Body>
            </Card>

        );
    }


}
