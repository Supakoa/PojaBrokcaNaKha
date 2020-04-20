import React,{useState, useRef} from 'react';
import {Card, Table, Button, Image, Overlay, Popover} from "react-bootstrap";
import {Newsadd, Newsdelete, Newsedit} from './modalCRUD/Newscrud';

export default function News(){
    const [newsAdd, setNewsAdd] = useState(false);
    const [newsEdit, setNewsEdit] = useState(false);
    const [newsDelete, setNewsDelete] = useState(false);

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
        setTimeout(() => {
            setShow(false);
        }, 5000);
    };



    return(
        <Card>
            <Card.Header className="text-center">
                <Card.Title className="p-2">
                    ตั้งค่าข่าวประชาสัมพันธ์
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Table striped hover responsive bordered>
                    <thead className="text-center">
                        <tr>
                            <th>#</th>
                            <th>URL</th>
                            <th>รูป</th>
                            <th>
                                <Button variant="info" size="sm" onClick={() => {setNewsAdd(true)}}>
                                    เพิ่ม
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" text-center">
                            <td className="align-middle">1</td>
                            <td className="align-middle">https://ssru.ac.th/</td>
                            <td className="align-middle pl-0 pr-0">
                                <Button size="md" variant="outline-dark" onClick={handleClick}>ดูภาพ</Button>
                                <PopoverImage show={show} target={target} ref={ref.current} placement="bottom"
                                              imgsrc="https://sisa.ssru.ac.th/useruploads/images/20191004/2019100415701812578706.jpg"
                                />
                            </td>
                            <td className="align-middle p-0">
                                <Button variant="warning" size="sm" onClick={() => {setNewsEdit(true)}}> แก้ไข</Button>{' '}
                                <Button variant="danger" size="sm" onClick={() => {setNewsDelete(true)}}>ลบ</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
            <Newsadd show={newsAdd} onHide={() => {setNewsAdd(false)}} />
            <Newsedit show={newsEdit} onHide={() => {setNewsEdit(false)}} />
            <Newsdelete show={newsDelete} onHide={() => {setNewsDelete(false)}} />
        </Card>
    );

}


function PopoverImage(props) {
    return(
        <Overlay
            show={props.show}
            target={props.target}
            placement={props.placement}
            container={props.ref}
        >
            <Popover id="popover-contained">
                <Popover.Title as="h4">รูป</Popover.Title>
                <Popover.Content>
                    <Image src={props.imgsrc}
                           rounded
                           fluid
                    />
                </Popover.Content>
            </Popover>
        </Overlay>
    );
}
