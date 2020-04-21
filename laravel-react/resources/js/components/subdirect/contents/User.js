import React, {Component, useState} from 'react';
import {Button, Card, Table} from 'react-bootstrap';
import {Useradd, Userdelete, Useredit} from "./modalCRUD/Usercrud";

export default class User extends Component{

    render() {
        const [addModal, setAddModal] = useState(false);
        const [editModal, setEditModal] = useState(false);
        const [deleteModal, setDeleteModal] = useState(false);

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
                        <tr>
                            <th>#</th>
                            <th>ชื่อ-สกลุ</th>
                            <th>ประเภท</th>
                            <th>อีเมล</th>
                            <th>เบอร์โทรศัพท์</th>
                            <th>คณะ</th>
                            <th>สาขา</th>
                            <th className="text-center">
                                <Button variant="info" size="sm" onClick={() => {setAddModal(true)}} >
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
                                <Button className="m-auto" variant="warning" size="sm" onClick={() => {setEditModal(true)}}>
                                    แก้ไข
                                </Button>{' '}
                                <Button className="m-auto" variant="danger" size="sm" onClick={() => {setDeleteModal(true)}}>
                                    ลบ
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <Userdelete show={deleteModal} onHide={() => {setDeleteModal(false)}} />
                    <Useredit show={editModal} onHide={() => {setEditModal(false)}} />
                    <Useradd show={addModal} onHide={() => {setAddModal(false)}} />
                </Card.Body>
            </Card>

        );
    }


}
