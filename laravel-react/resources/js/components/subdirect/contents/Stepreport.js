import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {StepEdit, StepDelete} from "./modalCRUD/StepreportCRUD";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";

export default class StepReport extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns:[
                {id: 'id', label: '#', minWidth: 100, align:'left'},
                {id: 'nameForm', label: 'รูปแบบเอกสาร', minWidth: 150, align: 'center'},
                {id: 'code', label: 'ID', minWidth: 170, align: 'center'},
                {id: 'action', label: 'Action', minWidth: 80, align:'center'},
            ],
            rows: [
                {id: 1, nameForm:'เอกสารขอขึ้นสอบ', code: 'DE - 2019',
                    action: <div className="d-flex m-auto align-middle justify-content-center"><StepEdit/><StepDelete/></div>}
            ],
            tableOption:{
                page: 0,
                rowsPerPage: 10,
            } ,
            modal:{
                show: false,
                name: '',
                display: null
            },
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.modalDisplay = this.modalDisplay.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        }

    showModal(event){
        this.setState({
            modal: {
                ...this.state.modal,
                show:true,
                name: event.target.value
            }
        });
        this.modalDisplay(event.target.name);

    }

    modalDisplay(e){
        if (e === 'edit'){
            this.setState({
                modal:{
                    ...this.state.modal,
                    display: true
                }
            })
        }else if (e === 'delete'){
            this.setState({
                modal:{
                    ...this.state.modal,
                    display: false
                }
            })
        }
    }

    closeModal(){
        this.setState({modal:{...this.state.modal,show : false}})
    }

     handleChangePage(event, newPage) {
         this.setState({tableOption:{
                 ...this.state.tableOption,
                 page:newPage,
         }})
    };

    handleChangeRowsPerPage(event){
        this.setState({tableOption:{
                ...this.state.tableOption,
                page:0,
                RowsPerPage:+event.target.value
            }})
    };

    render(){
        return(
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        ตั้งค่า ขั้นตอนเอกสาร
                    </Card.Title>
                </Card.Header>
                <Card.Body>

                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {this.state.columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.slice(this.state.tableOption.page * this.state.tableOption.rowsPerPage, this.state.tableOption.page * this.state.tableOption.rowsPerPage + this.state.tableOption.rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {this.state.columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={this.state.rows.length}
                        rowsPerPage={this.state.tableOption.rowsPerPage}
                        page={this.state.tableOption.page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />

                </Card.Body>
            </Card>
        );
    }

}
