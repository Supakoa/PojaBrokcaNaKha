import React from "react";
import LogoRegis from "./LogoReagis";
import { Col, Form, Button, Spinner } from "react-bootstrap";
import SimpleReactValidator from 'simple-react-validator';
import { useTranslation } from 'react-i18next';

export default function FormRegister() {
    // const dispatch = useDispatch();
    const { t, i18n, ready } = useTranslation('', { useSuspense: false });
    const [_select, setSelect] = React.useState(true);
    const [_majors, setMajors] = React.useState([]);
    const [_facs, setFacs] = React.useState([]);
    const [_loading, setLoading] = React.useState(true);
    const [_validator,setValidator] = React.useState(new SimpleReactValidator());
    const [_forms,serForms] = React.useState({});

    const _fetchFaculties = async () => {
        await axios.get(`http://127.0.0.1:8000/api/faculties`, {}).then(res => {
            const { success } = res.data;
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

    const handleChanges =  event =>  {
        const {name,value} = event.target;
        serForms({
            ..._forms,
            [name] : value
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


    return (

        <Form className="p-4 w-75 m-auto">

            <LogoRegis />
            <Form.Row className="mt-4">
                <Form.Group as={Col} controlId="title" sm={2} md={3} lg={3}>
                    <Form.Label>{t('title')}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t('title')}
                        name="title"
                        onChange={handleChanges}
                        onKeyUp = {handleChanges}
                        isInvalid = {!_validator.fieldValid('title')}

                        />
                    <Form.Control.Feedback type="invalid">
                        {_validator.showMessageFor('title')}
                        {_validator.message('title', _forms.title, 'max:3',  {messages: {}})}
                    </Form.Control.Feedback>

                </Form.Group>
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label>ชื่อ</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="ชื่อ"
                        name="firstName"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>นามสกุล</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="นามสกุล"
                        name="lastName"
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md={8} controlId="studentId">
                    <Form.Label>รหัสนักศึกษา</Form.Label>
                    <Form.Control
                        maxLength={11}
                        required
                        type="text"
                        placeholder="รหัสนักศึกษา"
                        name="studentId"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="password">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="รหัสผ่าน"
                        name="password"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} md={6} controlId="conPassword">
                    <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="ยืนยัน รหัสผ่าน"
                        name="conPassword"
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="email">
                    <Form.Label>อีเมล</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="example@ssru.ac.th.com"
                        name="email"
                        onChange={handleChanges}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="phone">
                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                    <Form.Control
                        maxLength={10}
                        required
                        type="text"
                        placeholder="เบอร์โทรศัพท์"
                        name="phone"
                        onChange={handleChanges}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="faculty">
                    <Form.Label>คณะ</Form.Label>
                    <Form.Control
                        required
                        as="select"
                        custom
                        name="faculty"
                        onChange={handleChanges}
                    >
                        <option value="">คณะ</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="major">
                    <Form.Label>สาขา</Form.Label>
                    <Form.Control
                        required
                        as="select"
                        custom
                        name="major"
                        onChange={handleChanges}
                        disabled={_select}
                    >
                        <option value="">สาขา</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Button variant="primary" onClick={handleOnClick}>
                {_loading ? "ยืนยัน" : <Spinner animation="border" />}
            </Button>
        </Form>
    );
}
