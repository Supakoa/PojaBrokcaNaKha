import React from "react";
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import validateIndex from "../../../../middleware/validate";
import { user } from "../../../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { ProfileContext, FacultiesContext } from "../../../context";
import ListFaculties from "./ListFaculties";
import ListMajors from "./ListMajors";
import { _urlUsers } from "../../../../middleware/apis";
import headerConfig from "../../../../middleware/headerConfig";
import { useTranslation } from "react-i18next";

const ProfileForm = ({ role }) => {
    const _dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const _studentProfile = useSelector(state => state.userState);
    const [_profile, setProfile] = React.useState({});
    const [_isSubmit, setIsSubmit] = React.useState(false);
    const [_disOption, setDisOption] = React.useState(true);
    const [_facultyId, setFacultyId] = React.useState(null);
    const [_isUpdate, setIsUpdate] = React.useState(false);
    const [_loading, setLoading] = React.useState(false);
    const abort = new AbortController();
    const [_validate, setValidate] = React.useState({});

    React.useEffect(() => {
        if (Object.keys(_profile).length === 0) {
            setProfile(_studentProfile, { signal: abort.signal });
        }
    }, [_studentProfile, _profile]);

    React.useEffect(() => {
        return () => {
            abort.abort();
        };
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        const _valid = validateIndex(name, value);
        setIsUpdate(true);
        setIsSubmit(_valid);
        if (_valid) {
            if (name === "faculty_id") {
                setDisOption(false);
                setFacultyId(Number(value));
            }
            setProfile({
                ..._profile,
                [name]: value
            });
        }
        setValidate({
            ..._validate,
            [name]: _valid
        });
    };

    const handleSubmit = async () => {
        if (_isUpdate && _isSubmit) {
            //set Loading
            setLoading(true);
            //update User to server service
            await axios
                .put(
                    `${_urlUsers()}/${_profile.id}`,
                    _profile,
                    headerConfig(localStorage._authLocal, 3600)
                )
                .then(res => {
                    _dispatch(user(res.data));

                    //set isLoading
                    setIsUpdate(false);
                    Swal.fire(
                        "เรียบร้อย",
                        "แก้ไขข้อมูลเรียบร้อย",
                        "success"
                    ).then(res => {
                        if (res.value) setLoading(false);
                    });
                });
        } else {
            Swal.fire("ผิดพลาด", "พบข้อมูลไม่ถูกต้อง!", "error");
        }
    };

    return (
        <ProfileContext.Consumer>
            {user => {
                return (
                    <Form>
                        <Form.Group as={Row} controlId="formName">
                            <Col sm={3} md={2} lg={2} className="py-2">
                                <Form.Label className="p-0">
                                    {t("students.forms.title")}
                                </Form.Label>
                                <Form.Control
                                    required
                                    isValid={
                                        _validate.title
                                            ? _validate.title
                                            : false
                                    }
                                    isInvalid={
                                        _validate.title !== undefined
                                            ? !_validate.title
                                            : false
                                    }
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    maxLength={6}
                                    type="text"
                                    placeholder={t("students.forms.title")}
                                    name="title"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.title
                                            ? _profile.title
                                            : user.title
                                    }
                                />
                            </Col>
                            <Col sm={7} md={3} lg={3} className="py-2">
                                <Form.Label>
                                    {t("students.forms.firstname.title")}
                                </Form.Label>
                                <Form.Control
                                    required
                                    isValid={
                                        _validate.first_name
                                            ? _validate.first_name
                                            : false
                                    }
                                    isInvalid={
                                        _validate.first_name !== undefined
                                            ? !_validate.first_name
                                            : false
                                    }
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="text"
                                    placeholder={t(
                                        "students.forms.firstname.title"
                                    )}
                                    name="first_name"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.first_name
                                            ? _profile.first_name
                                            : user.first_name
                                    }
                                />
                            </Col>
                            <Col
                                sm={10}
                                md={5}
                                lg={5}
                                className="py-md-2 py-lg-2"
                            >
                                <Form.Label>
                                    {t("students.forms.lastname")}
                                </Form.Label>
                                <Form.Control
                                    required
                                    isValid={
                                        _validate.last_name
                                            ? _validate.last_name
                                            : false
                                    }
                                    isInvalid={
                                        _validate.last_name !== undefined
                                            ? !_validate.last_name
                                            : false
                                    }
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="text"
                                    placeholder={t("students.forms.lastname")}
                                    name="last_name"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.last_name
                                            ? _profile.last_name
                                            : user.last_name
                                    }
                                />
                            </Col>
                            <Col sm={12} md={12} lg={12}>
                                <Form.Text className="text-muted">
                                    {t("students.forms.firstname.text")}
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={10} md={5} lg={5} className="py-2">
                                <Form.Label>
                                    {t("students.forms.student-id")}
                                </Form.Label>
                                <Form.Control
                                    required
                                    isValid={
                                        !!_validate.student_id
                                            ? _validate.student_id
                                            : false
                                    }
                                    isInvalid={
                                        _validate.student_id !== undefined
                                            ? !_validate.student_id
                                            : false
                                    }
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="text"
                                    name="student_id"
                                    maxLength={11}
                                    placeholder="59xxxxxxxxx"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.student_id
                                            ? _profile.student_id
                                            : user.student_id
                                    }
                                />
                            </Col>
                            <Col sm={10} md={5} lg={5} className="py-sm-2">
                                <Form.Label>
                                    {t("students.forms.phone.title")}
                                </Form.Label>
                                <Form.Control
                                    required
                                    isValid={
                                        _validate.telephone
                                            ? _validate.telephone
                                            : false
                                    }
                                    isInvalid={
                                        _validate.telephone !== undefined
                                            ? !_validate.telephone
                                            : false
                                    }
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="text"
                                    maxLength={10}
                                    name="telephone"
                                    placeholder={t(
                                        "students.forms.phone.title"
                                    )}
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.telephone
                                            ? _profile.telephone
                                            : user.telephone
                                    }
                                />
                                <Form.Text className="text-muted pl-2">
                                    {t("students.forms.phone.text")}
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={10} md={5} lg={5} className="py-2">
                                <Form.Label>
                                    {t("students.forms.mail.title")}
                                </Form.Label>
                                <Form.Control
                                    required
                                    isValid={
                                        _validate.email
                                            ? _validate.email
                                            : false
                                    }
                                    isInvalid={
                                        _validate.email !== undefined
                                            ? !_validate.email
                                            : false
                                    }
                                    className="border-right-0 border-left-0 border-top-0 p-1"
                                    type="email"
                                    name="email"
                                    placeholder="s59xxxxxxxx@ssru.ac.th"
                                    onChange={handleChange}
                                    defaultValue={
                                        _profile.email
                                            ? _profile.email
                                            : user.email
                                    }
                                />
                                <Form.Text className="text-muted pl-2">
                                    {t("students.forms.mail.text")}
                                </Form.Text>
                            </Col>
                            <Col
                                className={
                                    role === "approver" ? "d-block" : "d-none"
                                }
                                sm={10}
                                md={5}
                                lg={5}
                            >
                                <Form.File
                                    className="position-relative"
                                    name="file"
                                    label={
                                        i18n.language === "th"
                                            ? "นำเข้า ลายเซ็นต์"
                                            : "import licence"
                                    }
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group
                            className={role === "approver" ? "d-none" : ""}
                            as={Row}
                        >
                            <FacultiesContext.Consumer>
                                {faculties => {
                                    return (
                                        <ListFaculties
                                            nowFacultyId={_facultyId}
                                            methodHandle={handleChange}
                                            faculties={faculties}
                                            userMajor={
                                                user.major
                                                    ? user.major
                                                    : _profile.major
                                            }
                                        />
                                    );
                                }}
                            </FacultiesContext.Consumer>
                            <ListMajors
                                methodHandle={handleChange}
                                userMajor={user.major}
                                facultyId={_facultyId}
                                disOption={_disOption}
                            />
                        </Form.Group>

                        <Col className="text-center">
                            {_loading ? (
                                <Spinner animation="grow" />
                            ) : (
                                <Button
                                    variant={!_isUpdate ? "info" : "warning"}
                                    className={
                                        _isUpdate
                                            ? "text-white btn-block"
                                            : "disabled"
                                    }
                                    onClick={handleSubmit}
                                >
                                    {_isUpdate
                                        ? t("students.forms.btn.update")
                                        : t("students.forms.btn.save")}
                                </Button>
                            )}
                        </Col>
                    </Form>
                );
            }}
        </ProfileContext.Consumer>
    );
};

export default ProfileForm;
