import React from "react";
import LogoRegis from "./LogoReagis";
import {Col, Form, Button, Spinner, Row} from "react-bootstrap";
import SimpleReactValidator from 'simple-react-validator';
import {useTranslation} from 'react-i18next';

export default function FormRegister() {
    // const dispatch = useDispatch();
    const {t, i18n, ready} = useTranslation('', {useSuspense: false});
    const [_select, setSelect] = React.useState(true);
    const [_majors, setMajors] = React.useState([]);
    const [_facs, setFacs] = React.useState([]);
    const [_loading, setLoading] = React.useState(true);
    const [_validator, setValidator] = React.useState(
        new SimpleReactValidator()
    );
    const [_forms, serForms] = React.useState({});

    const _fetchFaculties = async () => {
        await axios.get(`http://127.0.0.1:8000/api/faculties`, {}).then(res => {
            const {success} = res.data;
            setFacs(success);
        });
        // .catch(error => {
        //     const result = confirm(error);
        //     if (result) {
        //         return null;
        //     }
        // });
    };

    const _fetchMajors = async _facId => {
        await axios
            .get(`http://127.0.0.1:8000/api/faculties/${_facId}/majors`)
            .then(res => {
                funcSet(res.data);
                // return res.data;
            });
    };

    React.useEffect(() => {
        _fetchFaculties();
        // _fetchMajors();
    }, []);

    const handleChanges = event => {
        const {name, value} = event.target;
        serForms({
            ..._forms,
            [name]: value
        });
    };

    const handleOnBlur = event => {
    };

    const handleOnClick = event => {
    };
    const handleIsInvalid = event => {
        // const {name,value} = event.target;
        //
        // return _validator.fieldValid(name);
    };

    const switchingLanguage = () => {
        if (i18n.language === "en") {
            i18n.changeLanguage("th");
        } else {
            i18n.changeLanguage("en");
        }
    };

    return (
        <Form className="p-4 w-75 m-auto">
            <LogoRegis/>
            <Form.Row className="mt-4">
                <Form.Group as={Col} controlId="title" sm={2} md={3} lg={3}>
                    <Form.Label>{t('user.title')}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t('user.title')}
                        name="title"
                        onChange={handleChanges}
                        onKeyUp={handleChanges}
                        isInvalid={!_validator.fieldValid("title")}
                    />
                    <Form.Control.Feedback type="invalid">
                        {_validator.showMessageFor("title")}
                        {_validator.message("title", _forms.title, "max:3", {
                            messages: {}
                        })}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label>{t("user.firstName")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("user.firstName")}
                        name="firstName"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>{t("user.lastName")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("user.lastName")}
                        name="lastName"
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} controlId="studentId">
                    <Form.Label>{t("user.studentId")}</Form.Label>
                    <Form.Control
                        maxLength={11}
                        required
                        type="text"
                        placeholder={t("user.studentId")}
                        name="studentId"
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

                <Form.Group as={Col} md={6} controlId="conPassword">
                    <Form.Label>{t("user.confirmPassword")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("user.confirmPassword")}
                        name="conPassword"
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

                <Form.Group as={Col} controlId="phone">
                    <Form.Label>{t("user.phoneNumber")}</Form.Label>
                    <Form.Control
                        maxLength={10}
                        required
                        type="text"
                        placeholder={t("user.phoneNumber")}
                        name="phone"
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="faculty">
                    <Form.Label>{t("user.faculty")}</Form.Label>
                    <Form.Control
                        required
                        as="select"
                        custom
                        name="faculty"
                        onChange={handleChanges}
                    >
                        <option value="">{t("user.faculty")}</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="major">
                    <Form.Label>{t("user.major")}</Form.Label>
                    <Form.Control
                        required
                        as="select"
                        custom
                        name="major"
                        onChange={handleChanges}
                        disabled={_select}
                    >
                        <option value="">{t("user.major")}</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Row>
                <Col xl= {3}>
                    <Button variant="primary" onClick={handleOnClick}>
                        {_loading ? "ยืนยัน" : <Spinner animation="border"/>}
                    </Button>
                </Col>
                <Col xl={6}>

                </Col>
                <Col xl= {3}>
                    <Button type="button" onClick={switchingLanguage}> SwitchingLanguage </Button>
                </Col>
            </Row>
        </Form>
    );
}
