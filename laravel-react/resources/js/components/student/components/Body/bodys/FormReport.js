import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container } from "react-bootstrap";
import ReportTable from "./tabs/ReportTable";

export default class FormReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: {
                classes: {
                    root: {
                        flexGrow: 1,
                        backgroundColor: "#1976D2"
                    }
                },
                value: 0
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.a11yProps = this.a11yProps.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({
            tabs: {
                ...this.state.tabs,
                value: newValue
            }
        });
    }

    a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`
        };
    }

    render() {
        return (
            <div className={this.state.tabs.classes.root}>
                <AppBar position="static">
                    <Tabs
                        value={this.state.tabs.value}
                        onChange={this.handleChange}
                        aria-label="simple tabs example"
                    >
                        <Tab label="ข้อมูลเอกสาร" {...this.a11yProps(0)} />
                        <Tab label="แบบฟอร์มเอกสาร" {...this.a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.tabs.value} index={0}>
                    <ReportTable />
                </TabPanel>
                <TabPanel value={this.state.tabs.value} index={1}>
                    ฟอร์ม
                </TabPanel>
            </div>
        );
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};
