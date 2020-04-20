import React, {useState} from 'react';
import {Button, Card, Table} from "react-bootstrap";
import {StepEdit, StepDelete} from "./modalCRUD/StepreportCRUD";

export default function StepReport(){
    const [stepEdit, setStepEdit] = useState(false);
    const [stepDelete, setStepDelete] = useState(false);

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
                            <td className="align-middle">DE - 2019</td>
                            <td className="align-middle">
                                <Button variant="warning" size="sm" className="text-light" onClick={() => {setStepEdit(true)}}>
                                    แก้ไข
                                </Button>{' '}
                                <Button size="sm" variant="danger" onClick={() => {setStepDelete(true)}}>
                                    ลบ
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <StepEdit show={stepEdit} onHide={() => {setStepEdit(false)}} />
                <StepDelete show={stepDelete} onHide={() => {setStepDelete(false)}} />
            </Card.Body>
        </Card>
    );
}
