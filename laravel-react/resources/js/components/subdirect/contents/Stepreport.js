import React, {Component} from 'react';
import {Card} from "react-bootstrap";
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
                {id: 'actions', label: 'Action', minWidth: 80, align:'center'},
            ],
            rows: [
                {id: 1, nameForm:'เอกสารขอขึ้นสอบ', code: 'DE - 2019', actions: ['edit', 'delete']}
            ],
            tableOption:{
                page: 0,
                rowsPerPage: 10,
            },
        };

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
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
                            <TableHead className="bg-info">
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
                                            {this.state.columns.map((column, index) => {
                                                const value = row[column.id];
                                                const classInCell = "d-flex m-auto align-middle justify-content-center";
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === 'actions'
                                                            ?   <div key={index.toString()} className={classInCell}>
                                                                    <StepEdit id={value[0]} />
                                                                    <StepDelete id={value[0]} />
                                                                </div>
                                                            : value
                                                        }
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
