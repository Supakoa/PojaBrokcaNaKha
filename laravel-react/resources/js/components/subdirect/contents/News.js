import React, {useState, useRef, Component} from 'react';
import {Card, Table, Button, Image, Overlay, Popover} from "react-bootstrap";
import {Newsadd, Newsdelete, Newsedit} from './modalCRUD/Newscrud';


export default class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
           modal:{
               name:'',
               show:false,
           },
           images:{
               show:false,
               target:null,
               placement:"top",
               ref: null,
               imageSRC: 'https://sisa.ssru.ac.th/useruploads/images/20191004/2019100415701812578706.jpg'
           }
        }
        this.showModal =  this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.showImages = this.showImages.bind(this);
    }

    showModal(event){
        this.setState({...this.state.modal,modal:{name: event.target.name, show:true,}})
    }

    closeModal(){
        this.setState({modal:{name:'', show:false}})
    }

    showImages(event){
        this.setState({images:{...this.state.images,show: !this.state.images.show, target:event.target,}})
        this.state.images.ref.current.focus()
    }
    render() {
        const overLayStyle = {
            width: '300px',
            height: '150px',
            overflow: 'hidden'
        }
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
                                <Button name="modalAdd" variant="info" size="sm" onClick={this.showModal} >
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
                                <Button size="sm" variant="outline-info" onClick={this.showImages}>view</Button>
                                <Overlay
                                    show={this.state.images.show}
                                    target={this.state.images.target}
                                    placement={this.state.images.placement}
                                    container={this.state.images.ref}
                                    containerPadding={1}
                                >
                                    <Popover style={overLayStyle} id="popover-contained">
                                        <Popover.Title as="h4" className="text-center">Image</Popover.Title>
                                        <Image src={this.state.images.imageSRC} fluid rounded="true" />
                                    </Popover>
                                </Overlay>
                            </td>
                            <td className="align-middle p-0">
                                <Button name="modalEdit" variant="warning" size="sm" onClick={this.showModal} > แก้ไข</Button>{' '}
                                <Button name="modalDelete" variant="danger" size="sm" onClick={this.showModal} >ลบ</Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                { (this.state.modal.name === 'modalAdd') ? <Newsadd show={this.state.modal.show} onHide={this.closeModal} /> : null}
                { (this.state.modal.name === 'modalEdit') ? <Newsedit show={this.state.modal.show} onHide={this.closeModal} /> : null}
                { (this.state.modal.name === 'modalDelete') ? <Newsdelete show={this.state.modal.show} onHide={this.closeModal} /> : null}
            </Card>
        );
    }
}



