import React from "react";
import LogoRegis from "./LogoReagis";
import { Col, Form, Button, Spinner, Row, InputGroup } from "react-bootstrap";
import validateIndex from "../../middleware/validate";
import { useTranslation } from "react-i18next";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { _URL } from "../../middleware/URL";
import Loading from "../../student/components/loading";

export default function FormRegister() {
    const { t, i18n } = useTranslation();
    const _history = useHistory();
    const [_majors, setMajors] = React.useState([]);
    const [selectedFaculty, setSelectedFaculty] = React.useState(0);
    const [selectedMajor, setSelectedMajor] = React.useState(0);
    const [_facs, setFacs] = React.useState([]);
    const [password, setPassword] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);
    const [_loading, setLoading] = React.useState(true);
    const [_loadMajor, setLoadMajor] = React.useState(false);
    const [_validator, setValidator] = React.useState(false);
    const [_forms, serForms] = React.useState({});
    const arrTitleTh = ["นาย", "นาง", "นางสาว"];
    const arrTitleEng = ["Mr.", "Miss."];

    const fetchFaculties = async () => {
        await axios.get(`${_URL}/api/faculties`, {}).then(res => {
            const { success } = res.data;
            setFacs(success);
        });
    };

    const _fetchMajors = async _facId => {
        await axios
            .get(`${_URL}/api/faculties/${Number(_facId)}/majors`)
            .then(res => {
                setMajors(res.data);
                setLoadMajor(false);
            });
    };

    const handleChanges = event => {
        const { name, value } = event.target;
        let _string = "";
        if (name == "c_password" || name == "password") {
            if (name == "password" && value.length >= 6) {
                setPassword(true);
            }
            serForms({
                ..._forms,
                [name]: value
            });
        } else {
            if (name === "email") {
                _string = `s${value}@ssru.ac.th`;
            } else {
                _string = value;
            }
            const valid = validateIndex(name, _string);

            setValidator({
                ..._validator,
                [name]: !valid
            });
            if (name == "faculty_id") {
                setSelectedFaculty(_string);
                setLoadMajor(true);
            } else if (name == "major_id") {
                setSelectedMajor(_string);
                serForms({
                    ..._forms,
                    [name]: _string
                });
            } else {
                serForms({
                    ..._forms,
                    [name]: _string
                });
            }
        }
    };

    const handleOnClick = async e => {
        let check = Object.values(_forms).length < 8;
        setConfirm(check && !password);
        if (!check && password) {
            setLoading(false);

            await Axios.post(`${_URL}/api/register`, {
                ..._forms,
                role_id: 3
            })
                .then(res => {
                    if (res.data.success.token)
                        Swal.fire(
                            "success",
                            "resgister success",
                            "success"
                        ).then(res => {
                            if (res.value) {
                                _history.push("/login");
                                setLoading(true);
                            }
                        });
                })
                .catch(() => setLoading(true));
        }
        if (!_loading) setLoading(true);
    };

    React.useEffect(() => {
        if (_facs.length === 0) {
            fetchFaculties();
        } else if (Number(selectedFaculty) > 0) {
            _fetchMajors(selectedFaculty);
        }
    }, [_facs, selectedFaculty, _loading]);

    return (
        <Form className="p-4  m-auto">
            <LogoRegis />
            <Form.Text className="text-muted">
                {t("students.forms.firstname.text")}
            </Form.Text>
            <Form.Row className="mt-4">
                <Form.Group as={Col} controlId="title" sm={2} md={3} lg={3}>
                    <Form.Label>{t("user.title")}</Form.Label>
                    <Form.Control
                        required
                        as="select"
                        isInvalid={
                            _validator.title
                                ? _validator.title
                                : confirm && !!!_forms.title
                        }
                        name="title"
                        onChange={handleChanges}
                    >
                        <option value="0">
                            {i18n.language === "th"
                                ? "เลือกคำนำหน้า"
                                : "Choose title"}
                        </option>
                        {i18n.language === "th"
                            ? arrTitleTh.map((item, idx) => {
                                  return (
                                      <option key={idx} value={item}>
                                          {item}
                                      </option>
                                  );
                              })
                            : arrTitleEng.map((item, idx) => {
                                  return (
                                      <option key={idx} value={item}>
                                          {item}
                                      </option>
                                  );
                              })}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="first_name">
                    <Form.Label>{t("user.firstName")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        isInvalid={
                            _validator.first_name
                                ? _validator.first_name
                                : confirm && !!!_forms.first_name
                        }
                        placeholder={t("user.firstName")}
                        name="first_name"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="last_name">
                    <Form.Label>{t("user.lastName")}</Form.Label>
                    <Form.Control
                        required
                        isInvalid={
                            _validator.last_name
                                ? _validator.last_name
                                : confirm && !!!_forms.last_name
                        }
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
                        isInvalid={
                            _validator.student_id
                                ? _validator.student_id
                                : confirm && !!!_forms.student_id
                        }
                        type="text"
                        placeholder="59xxxxxxxxx"
                        name="student_id"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="password">
                    <Form.Label>{t("user.password")}</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        isInvalid={
                            (confirm &&
                                _forms.password !== _forms.c_password &&
                                !password) ||
                            (!_forms.password && confirm && !password)
                        }
                        placeholder={t("user.password")}
                        name="password"
                        onChange={handleChanges}
                    />
                    <Form.Text>
                        {i18n.language == "th"
                            ? "ใส่อย่างน้อย 6 ตัว"
                            : "Put at least 6 characters"}
                    </Form.Text>
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="c_password">
                    <Form.Label>{t("user.confirmPassword")}</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        isInvalid={
                            _forms.c_password
                                ? _forms.password !== _forms.c_password
                                : confirm && !!!_forms.c_password
                        }
                        placeholder={t("user.confirmPassword")}
                        name="c_password"
                        disabled={!_forms.password}
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={12} lg={8} controlId="email">
                    <Form.Label>{t("user.email")}</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                s
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            placeholder="59xxxxxxxx"
                            required
                            maxLength={11}
                            type="text"
                            isInvalid={
                                _validator.email
                                    ? _validator.email
                                    : confirm && !!!_forms.email
                            }
                            name="email"
                            onChange={handleChanges}
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon1">
                                @ssru.ac.th
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    {/* <Form.Control
                        required
                        type="email"
                        isInvalid={
                            _validator.email
                                ? _validator.email
                                : confirm && !!!_forms.email
                        }
                        placeholder="s59xxxxxxxx@ssru.ac.th"
                        name="email"
                        onChange={handleChanges}
                    /> */}
                    <Form.Text className="text-muted pl-2">
                        {t("students.forms.mail.text")}
                    </Form.Text>
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="telephone">
                    <Form.Label>{t("user.phoneNumber")}</Form.Label>
                    <Form.Control
                        maxLength={10}
                        isInvalid={
                            _validator.telephone
                                ? _validator.telephone
                                : confirm && !!!_forms.telephone
                        }
                        required
                        type="text"
                        placeholder={t("user.phoneNumber")}
                        name="telephone"
                        onChange={handleChanges}
                    />
                    <Form.Text className="text-muted pl-2">
                        {t("students.forms.phone.text")}
                    </Form.Text>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="faculty_id">
                    <Form.Label>{t("user.faculty")}</Form.Label>
                    <Form.Control
                        as="select"
                        custom
                        name="faculty_id"
                        isInvalid={
                            _validator.faculty_id
                                ? _validator.faculty_id
                                : confirm && selectedFaculty == 0
                        }
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
                    {selectedFaculty !== 0 &&
                    _loadMajor &&
                    _majors.length === 0 ? (
                        <div className="py-2 px-3">
                            <Spinner animation="border" size="sm" />
                        </div>
                    ) : (
                        <Form.Control
                            required
                            as="select"
                            custom
                            name="major_id"
                            isInvalid={
                                _validator.major_id
                                    ? _validator.major_id
                                    : confirm && selectedMajor == 0
                            }
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
                    )}
                </Form.Group>
            </Form.Row>
            <Row>
                <Col xl={3}>
                    <Button variant="primary" onClick={handleOnClick}>
                        {_loading ? (
                            t("user.btn")
                        ) : (
                            <span>
                                <Spinner animation="border" size="sm" />{" "}
                                {i18n.language === "th"
                                    ? "กำลังโหลด..."
                                    : "Loading..."}
                            </span>
                        )}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
