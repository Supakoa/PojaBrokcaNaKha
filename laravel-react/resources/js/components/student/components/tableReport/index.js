import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { TeableReportCxt } from "../../context";

export default class ReportTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TeableReportCxt.Consumer>
                {table => {
                    return (
                        <div className="p-3">
                            <MDBDataTable
                                noBottomColumns={true}
                                borderless
                                btn
                                striped
                                borderless
                                hover
                                data={table}
                            />
                        </div>
                    );
                }}
            </TeableReportCxt.Consumer>
        );
    }
}
