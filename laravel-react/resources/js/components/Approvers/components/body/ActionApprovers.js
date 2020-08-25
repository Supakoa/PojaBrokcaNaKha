import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import uploadsImage from "../../../middleware/axios/uploads";
import Swal from "sweetalert2";
import { postApproveDocument } from "../../../middleware/axios/approveDocument";
import post2UserDocuments from "../../../middleware/post2Redux/postToUserDocuments";
import { useDispatch, useSelector } from "react-redux";
import { userDocument } from "../../../../redux/actions";
import { useHistory } from "react-router-dom";

const ActionApprovers = ({ stateApprovers, stateDocument, documentID }) => {
    const [_formValid, setFormValid] = React.useState(false);
    const [_pivot, setPivot] = React.useState({});
    const _userId = useSelector(s => s.userState.id);
    const _dispatch = useDispatch();
    let _history = useHistory();
    const [_loading, setLoading] = React.useState(false);

    const handleChange = async e => {
        const { id, value, type, files } = e.target;
        if (type === "file") {
            const file = files[0];

            const _pathImg = await uploadsImage(file, localStorage._authLocal);
            if (_pathImg) {
                setPivot({
                    ..._pivot,
                    [id]: _pathImg
                });
            }
        } else {
            setPivot({
                ..._pivot,
                [id]: value
            });
        }
    };

    const handleSubmit = () => {
        setFormValid(_pivot.status && _pivot.status !== "none" ? false : true);
        if (_pivot.status && _pivot.status !== "none") {
            setLoading(true);

            Swal.fire({
                title: "คุณแน่ใจ ?",
                text: "คุณต้องการ อณุมัติคำร้องนี้!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "ไม่",
                confirmButtonText: "ยืนยัน"
            }).then(async res => {
                if (res.value) {
                    const _setPost = {
                        status: _pivot.status,
                        comment: _pivot.comment ? _pivot.comment : null,
                        return_file: _pivot.return_file
                            ? _pivot.return_file
                            : null
                    };
                    await postApproveDocument(
                        localStorage._authLocal,
                        _setPost,
                        documentID
                    ).then(res => {
                        if (res) {
                            setLoading(false);
                            Swal.fire(
                                "เรียบร้อย!",
                                "ยืนยันการตรวจเรียบร้อย!",
                                "success"
                            ).then(res => {
                                if (res.value) {
                                    post2UserDocuments({
                                        token: localStorage._authLocal,
                                        id: _userId,
                                        dispatch: _dispatch,
                                        acUserDocs: userDocument
                                    });
                                    _history.push("/Approvers");
                                }
                            });
                        } else {
                            Swal.fire(
                                "ผิดพลาด!",
                                "การตรวจเรียบร้อยผิดพลาด กรุณาลองอีกครั้ง!",
                                "error"
                            );
                        }
                    });
                }
            });
        }
    };

    if (stateDocument === Number(stateApprovers)) {
        return (
            <Form>
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
                                isValid={
                                    _pivot.status && _pivot.status !== "none"
                                        ? !_formValid
                                        : _formValid
                                }
                                isInvalid={_formValid}
                                as="select"
                                required
                                onChange={handleChange}
                                name="status"
                                defaultValue="Choose..."
                            >
                                <option value="none">Choose Status.</option>
                                <option value="approved">Approve.</option>
                                <option value="edit">Edit</option>
                                <option value="cancel">Cancel</option>
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
                    {_loading ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        <Button onClick={handleSubmit} variant="info">
                            Submit <i className="fas fa-paper-plane"></i>
                        </Button>
                    )}
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
