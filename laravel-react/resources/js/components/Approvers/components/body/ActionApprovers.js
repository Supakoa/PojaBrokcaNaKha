import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import uploadsImage from "../../../middleware/axios/uploads";

const ActionApprovers = ({ stateApprovers, stateDocument }) => {
    const [_formValid, setFormValid] = React.useState(false);
    const [_pivot, setPivot] = React.useState({});
    const handleChange = async e => {
        const { id, value, type, files } = e.target;
        if (type === "file") {
            const file = files[0];

            const _pathImg = await uploadsImage(file, localStorage._authLocal);
            if (_pathImg) {
                setPivot({
                    [id]: value
                });
            }
        } else {
            setPivot({
                [id]: value
            });
        }
    };

    const handleSubmit = e => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    if (stateDocument === Number(stateApprovers)) {
        return (
            <Form onSubmit={handleSubmit} noValidate validated={_formValid}>
                <Row>
                    <Col lg={6} md={6}>
                        <Form.Group controlId="comment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                as="textarea"
                                name="comment"
                                rows="3"
                            />
                        </Form.Group>
                    </Col>
                    <Col className="row" lg={6} md={6}>
                        <Form.Group as={Col} lg={6} md={6} controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                required
                                onChange={handleChange}
                                name="status"
                                defaultValue="Choose..."
                            >
                                <option>Choose Status.</option>
                                <option>Approve.</option>
                                <option>Edit</option>
                                <option>Cancel</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            lg={6}
                            md={6}
                            controlId="return_file"
                        >
                            <Form.File
                                onChange={handleChange}
                                className="position-relative"
                                id="return_file"
                                label="File"
                                name="file"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="text-right">
                    <Button type="submit" variant="info">
                        Submit <i className="fas fa-paper-plane"></i>
                    </Button>
                </div>
            </Form>
        );
    } else {
        return (
            <div className="text-center">
                <i className="fas fa-ellipsis-h"></i>
            </div>
        );
    }
};

export default ActionApprovers;
