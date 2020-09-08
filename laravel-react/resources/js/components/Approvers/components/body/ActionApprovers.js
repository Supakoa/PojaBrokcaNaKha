import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import uploadsImage from "../../../middleware/axios/uploads";
import Swal from "sweetalert2";
import { postApproveDocument } from "../../../middleware/axios/approveDocument";
import { useDispatch, useSelector } from "react-redux";
import { userDocument } from "../../../../redux/actions";
import { useHistory } from "react-router-dom";
import { fetchUserDoc } from "../../../middleware/axios/fetchUserDoc";
import { useTranslation } from "react-i18next";
import ProgressState from "./history-approvers/ProgressState";
import uploadsReturnFile from "../../../middleware/axios/uploadsReturnFile";

const ActionApprovers = ({
    stateApprovers,
    stateDocument,
    documentID,
    statusDocument,
    setRows,
    maxState
}) => {
    const [_formValid, setFormValid] = React.useState(false);
    const [_pivot, setPivot] = React.useState({});
    const _userId = useSelector(s => s.userState.id);
    const _dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    let _history = useHistory();
    const [_loading, setLoading] = React.useState(false);
    const [_loadingImg, setLoadingImg] = React.useState(false);

    const handleChange = async e => {
        const { id, value, type, files } = e.target;
        if (type === "file") {
            const file = files[0];
            setLoadingImg(true);
            const _pathImg = await uploadsReturnFile(
                file,
                localStorage._authLocal
            );
            if (_pathImg) {
                setPivot({
                    ..._pivot,
                    [id]: _pathImg
                });
                Swal.fire("สำเร็จ !! ", "อัพไฟล?สำเร็จ", "success").then(
                    res => {
                        if (res.value) setLoadingImg(false);
                    }
                );
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
                            Swal.fire(
                                "เรียบร้อย!",
                                "ยืนยันการตรวจเรียบร้อย!",
                                "success"
                            ).then(async res => {
                                if (res.value) {
                                    const _newDocs = await fetchUserDoc({
                                        token: localStorage._authLocal,
                                        id: _userId
                                    });
                                    if (_newDocs) {
                                        setLoading(false);
                                        _dispatch(userDocument(_newDocs));
                                        setRows([]);
                                        _history.push("/Approvers");
                                    }
                                }
                            });
                        } else {
                            Swal.fire(
                                "ผิดพลาด!",
                                "การตรวจเรียบร้อยผิดพลาด กรุณาลองอีกครั้ง!",
                                "error"
                            ).then(() => setLoading(false));
                        }
                    });
                    setLoading(false);
                }
                setLoading(false);
            });
        }
    };

    if (
        (stateDocument === Number(stateApprovers) &&
            statusDocument === "pending") ||
        statusDocument === "edited"
    ) {
        return (
            <Form>
                <ProgressState max={maxState} now={stateDocument} />
                <Row>
                    <Col lg={6} md={6}>
                        <Form.Group controlId="comment">
                            <Form.Label>
                                {t("approvers.action.comment")}
                            </Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                as="textarea"
                                name="comment"
                                placeholder={t(
                                    "approvers.action.place-comment"
                                )}
                                rows="3"
                            />
                        </Form.Group>
                    </Col>
                    <Col className="row" lg={6} md={6}>
                        <Form.Group as={Col} lg={6} md={6} controlId="status">
                            <Form.Label>
                                {t("approvers.action.status")}
                            </Form.Label>
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
                            >
                                <option value="none">
                                    {t("approvers.action.place-status")}
                                </option>
                                <option value="approved">
                                    {stateDocument !== maxState
                                        ? i18n.language === "th"
                                            ? "ลงนาม"
                                            : "Sign"
                                        : t("filter.approved")}
                                </option>
                                <option value="edited">
                                    {t("filter.edit")}
                                </option>
                                <option value="rejected">
                                    {t("filter.reject")}
                                </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            lg={6}
                            md={6}
                            controlId="return_file"
                        >
                            {/* <Form.Label>
                                {t("approvers.action.file")}
                            </Form.Label> */}
                            <Form.File
                                onChange={handleChange}
                                className="position-relative"
                                placeholder="eiei"
                                id="return_file"
                                label={t("approvers.action.place-file")}
                                name="file"
                            />
                            <Form.Text>
                                {_loadingImg
                                    ? i18n.language === "th"
                                        ? "กำลังโหลดไฟล์..."
                                        : "File Loading..."
                                    : ""}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <div className="text-right">
                    {_loading ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        <Button onClick={handleSubmit} variant="info">
                            {t("approvers.action.btn")}{" "}
                            <i className="fas fa-paper-plane"></i>
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
