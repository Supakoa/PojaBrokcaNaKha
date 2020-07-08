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
                        <MDBDataTable
                            noBottomColumns={true}
                            entriesLabel="ข้อมูลที่แสดง"
                            entriesOptions={[5, 10, 15]}
                            entries={5}
                            infoLabel={["กำลังแสดง", "-", "ของ", "รายการ"]}
                            paginationLabel={["ก่อนหน้า", "ถัดไป"]}
                            searchLabel="ค้นหา"
                            barReverse={true}
                            borderless
                            striped
                            hover
                            data={table}
                        />
                    );
                }}
            </TeableReportCxt.Consumer>
        );
    }
}
