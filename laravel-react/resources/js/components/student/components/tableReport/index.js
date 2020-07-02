import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";

export default class ReportTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {
                columns: [
                    {
                        label: "#",
                        field: "id",
                        sort: "asc",
                        width: 50
                    },
                    {
                        label: "สถานะ",
                        field: "status",
                        sort: "asc",
                        width: 120
                    },
                    {
                        label: "แบบคำร้อง",
                        field: "reports",
                        sort: "asc",
                        width: 150
                    },
                    {
                        label: "สถานะการดำเนินการ",
                        field: "statusSteps",
                        sort: "asc",
                        width: 150
                    },
                    {
                        label: "หมายเหตุ",
                        field: "comments",
                        sort: "asc",
                        width: 150
                    }
                ],
                rows: [
                    {
                        id: 1,
                        status: "nop",
                        reports: "eieieieiei",
                        statusSteps: "12312",
                        comments: "get out"
                    }
                ]
            }
        };
    }
    render() {
        return (
            <div className="p-3">
                <MDBDataTable
                    noBottomColumns={true}
                    borderless
                    btn
                    striped
                    borderless
                    hover
                    data={this.state.table}
                />
            </div>
        );
    }
}
