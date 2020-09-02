import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import TableUser from "./table";
import ModalUser from "../modals/ModalUser";
import Axios from "axios";
import {newsActions} from "../../../redux/actions";

export default class User extends Component {


    constructor(props) {
        super(props);
        this.state = {};

        this.exportUsers = this.exportUsers.bind(this);
        this.importUsers = this.importUsers.bind(this);
        this.templateUser = this.templateUser.bind(this)
    }
    templateUser(){
         Axios.get("http://localhost:8000/api/news", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(async res => {
            await dispatch(newsActions("INIT_SHOW_NEWS", res.data))
        });
    }
    exportUsers(){
         Axios.get("http://localhost:8000/api/news", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(async res => {
            await dispatch(newsActions("INIT_SHOW_NEWS", res.data))
        });
    }

    importUsers(){

    }

    render() {
        return (
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">{this.props.t('menu.users')}</Card.Title>
                </Card.Header>
                <Card.Body className="w-100">
                    <div className='text-right py-2'>
                        <Button className='mx-2' size='sm' variant='primary' onClick={this.importUsers} >
                            <i className="fas fa-file-import"></i> import
                        </Button>
                        <Button className='mx-2' size='sm' variant='info' onClick={this.exportUsers}>
                            <i className="fas fa-file-export"></i> export
                        </Button>
                        <Button className='mx-2' size='sm' variant='secondary' onClick={this.templateUser}>
                            <i className="far fa-file"></i> Template
                        </Button>
                    </div>
                    <div className="text-right justify-content-end">
                        <ModalUser isCreatedProp={true} />
                    </div>
                    <TableUser />
                </Card.Body>
            </Card>
        );
    }
}
