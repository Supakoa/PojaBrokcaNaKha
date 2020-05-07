import React, {Component} from 'react';
import {Card, Button, Image, Overlay, Popover} from "react-bootstrap";
import {Newsadd, Newsdelete, Newsedit} from './modalCRUD/Newscrud';
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";


export default class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tableOption:{
                page: 0,
                rowsPerPage: 10,
            },
           images:{
               show:false,
               target:null,
               placement:"top",
               ref: null,
               imageSRC: 'https://sisa.ssru.ac.th/useruploads/images/20191004/2019100415701812578706.jpg'
           }
        }
        this.rows = [
            {id: 1, url:'www.ssru.ac.th', image:'', actions: ['edit', 'delete']}
        ]
        this.columns = [
            {id: 'id', label: '#', minWidth: 100, align:'left'},
            {id: 'url', label: 'URL', minWidth: 170, align: 'center'},
            {id: 'image', label: 'รูป', minWidth: 100, align: 'center'},
            {id: 'actions', label: <Newsadd/>, minWidth: 80, align:'center'},
        ]

        this.checkValueInCellTable = this.checkValueInCellTable.bind(this);
        this.imageOverlay = this.imageOverlay.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.showImages = this.showImages.bind(this);
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

    showImages(event){
        this.setState({images:{...this.state.images,show: !this.state.images.show, target:event.target,}})
        this.state.images.ref.current.focus()
    }

    imageOverlay(obj, overLayStyle, onclick) {
        return(
            <div>
                <Button size="sm" variant="outline-info" onClick={onclick}>view</Button>
                <Overlay
                    show={obj.show}
                    target={obj.target}
                    placement={obj.placement}
                    container={obj.ref}
                    containerPadding={1}
                >
                    <Popover style={overLayStyle} id="popover-contained">
                        <Popover.Title as="h4" className="text-center">Image</Popover.Title>
                        <Image src={obj.imageSRC} fluid rounded="true" />
                    </Popover>
                </Overlay>
            </div>
        );
    }

    checkValueInCellTable(value, columnId, classInCell, index, objImage){
        const overLayStyle = {
            width: '300px',
            height: '150px',
            overflow: 'hidden'
        }
        if(columnId === 'image'){
           return this.imageOverlay(objImage, overLayStyle, this.showImages)
        }else if(columnId === 'actions'){
            return <div key={index.toString()} className={classInCell}><Newsedit id={value[0]} /><Newsdelete id={value[0]} /></div>
        }
        return value;
    }

    render() {

        return(
            <Card>
                <Card.Header className="text-center">
                    <Card.Title className="p-2">
                        ตั้งค่าข่าวประชาสัมพันธ์
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <Table stickyHeader  aria-label="sticky table">
                            <TableHead className="bg-info" >
                                <TableRow>
                                    {this.columns.map((column) => (
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
                                {this.rows.slice(this.state.tableOption.page * this.state.tableOption.rowsPerPage, this.state.tableOption.page * this.state.tableOption.rowsPerPage + this.state.tableOption.rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id.toString()}>
                                            {this.columns.map((column, index) => {
                                                const value = row[column.id];
                                                const classInCell = "d-flex m-auto align-middle justify-content-center";
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {this.checkValueInCellTable(value, column.id, classInCell, index, this.state.images)}
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
                        count={this.rows.length}
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

