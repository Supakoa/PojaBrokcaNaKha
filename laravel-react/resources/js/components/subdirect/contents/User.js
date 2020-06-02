import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import MaterialTable from "material-table";

export default class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'ชื่อ - นามสกุล', field: 'name'},
                { title: 'ประเภท', field: 'type' },
                { title: 'อีเมล', field: 'email'},
                { title: 'เบอร์โทรศัพท์', field: 'phone' },
                { title: 'คณะ', field: 'faculty', lookup:{0:'เทคโนโยลีอุสาหกรรม', 1: 'พยาบาล'}},
                { title: 'สาขา', field: 'major', lookup: {0:'วิศวกรรมคอมพิวเตอร์'}},
            ],
            data: [
                {
                    id: 1,
                    name: 'Supakit Kitjanabumrungsak',
                    type: 'Addmin', email: 'Koa@gmail.com',
                    phone: '0922595281',
                    faculty: 0,
                    major: 0,
                },
            ],
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
                    <MaterialTable
                        stickyHeader
                        title="ตารางสมาชิค"
                        columns={this.state.columns}
                        data={this.state.data}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        this.setState((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            this.setState((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        this.setState((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return {...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />

                </Card.Body>
            </Card>

        );
    }


}
