import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import News from "./subdirectMain/News";
import FormReport from "./subdirectMain/FormReport";

class Main extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <News/>
                    <br/>
                    <FormReport/>
                </Card.Body>
            </Card>
        );
    }
}

export default Main;
