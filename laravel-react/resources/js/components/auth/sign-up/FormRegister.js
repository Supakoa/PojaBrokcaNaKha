import React from "react";
import LogoRegis from "./LogoReagis";
import { Col, Form, Button, Spinner, Row } from "react-bootstrap";
import validateIndex from "../../middleware/validate";
import { useTranslation } from "react-i18next";

export default function FormRegister() {
    // const dispatch = useDispatch();
    const { t } = useTranslation();
    const [_majors, setMajors] = React.useState([]);
    const [selectedFaculty, setSelectedFaculty] = React.useState(0);
    const [selectedMajor, setSelectedMajor] = React.useState(0);
    const [_facs, setFacs] = React.useState([]);
    const [_loading, setLoading] = React.useState(true);
    const [_validator, setValidator] = React.useState(false);
    const [_forms, serForms] = React.useState({});

    const fetchFaculties = async () => {
        await axios.get(`http://127.0.0.1:8000/api/faculties`, {}).then(res => {
            const { success } = res.data;
            setFacs(success);
        });
    };

    const _fetchMajors = async _facId => {
        await axios
            .get(`http://127.0.0.1:8000/api/faculties/${Number(_facId)}/majors`)
            .then(res => {
                setMajors(res.data);
                // return res.data;
            });
    };

    const handleChanges = event => {
        const { name, value } = event.target;
        const valid = validateIndex(name, value);

        setValidator({
            ..._validator,
            [name]: !valid
        });
        if (name == "faculty") {
            setSelectedFaculty(value);
        } else if (name == "major") {
            setSelectedMajor(value);
            serForms({
                ..._forms,
                [name]: value
            });
        } else {
            serForms({
                ..._forms,
                [name]: value
            });
        }
    };

    const handleOnClick = event => {};

    React.useEffect(() => {
        if (_facs.length === 0) {
            fetchFaculties();
        } else if (Number(selectedFaculty) > 0) {
            _fetchMajors(selectedFaculty);
        }
    }, [_facs, selectedFaculty]);

    return (
        <Form className="p-4 w-75 m-auto">
            <LogoRegis />
            <Form.Row className="mt-4">
                <Form.Group as={Col} controlId="title" sm={2} md={3} lg={3}>
                    <Form.Label>{t("user.title")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("user.title")}
                        name="title"
                        isInvalid={_validator.title ? _validator.title : false}
                        onChange={handleChanges}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="first_name">
                    <Form.Label>{t("user.firstName")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("user.firstName")}
                        name="first_name"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="last_name">
                    <Form.Label>{t("user.lastName")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("user.lastName")}
                        name="last_name"
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} controlId="student_id">
                    <Form.Label>{t("user.studentId")}</Form.Label>
                    <Form.Control
                        maxLength={11}
                        required
                        type="text"
                        placeholder={t("user.studentId")}
                        name="student_id"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="password">
                    <Form.Label>{t("user.password")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("user.password")}
                        name="password"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="c_password">
                    <Form.Label>{t("user.confirmPassword")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("user.confirmPassword")}
                        name="c_password"
                        disabled={!_forms.password}
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="email">
                    <Form.Label>{t("user.email")}</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="example@ssru.ac.th.com"
                        name="email"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="telephone">
                    <Form.Label>{t("user.phoneNumber")}</Form.Label>
                    <Form.Control
                        maxLength={10}
                        required
                        type="text"
                        placeholder={t("user.phoneNumber")}
                        name="telephone"
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="faculty_id">
                    <Form.Label>{t("user.faculty")}</Form.Label>
                    <Form.Control
                        // required={!!_validator.faculty_id}
                        // isInvalid={
                        //     _validator.faculty_id
                        //         ? _validator.faculty_id
                        //         : false
                        // }
                        as="select"
                        custom
                        name="faculty_id"
                        onChange={handleChanges}
                        value={selectedFaculty > 0 ? selectedFaculty : 0}
                    >
                        <option value="0">{t("user.faculty")}</option>
                        {_facs.map((item, idx) => {
                            return (
                                <option key={idx} value={item.id}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="major_id">
                    <Form.Label>{t("user.major")}</Form.Label>
                    <Form.Control
                        required
                        as="select"
                        custom
                        name="major_id"
                        onChange={handleChanges}
                        disabled={selectedFaculty === 0}
                        value={selectedMajor > 0 ? selectedMajor : 0}
                    >
                        <option value="0">{t("user.major")}</option>
                        {_majors.map((item, idx) => {
                            return (
                                <option key={idx} value={item.id}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Row>
                <Col xl={3}>
                    <Button variant="primary" onClick={handleOnClick}>
                        {_loading ? (
                            t("user.btn")
                        ) : (
                            <Spinner animation="border" />
                        )}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
