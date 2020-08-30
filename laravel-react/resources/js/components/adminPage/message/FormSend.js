import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { postMessage } from "../../middleware/axios/postMessage";

const FormSend = ({ userId }) => {
    const [_message, setMessage] = React.useState("");
    const { t } = useTranslation();
    const handleChange = e => {
        console.log(e.target.value);
        setMessage(e.target.value);
    };

    const onClickHandle = async () => {
        if (!!_message) {
            await postMessage(localStorage._authLocal, {
                message: _message,
                user_id: userId
            });
            setMessage("");
        }
    };

    return (
        <InputGroup>
            <Form.Control
                name="textMessage"
                placeholder={t("menu.message")}
                onChange={handleChange}
                value={_message}
            />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={onClickHandle}>
                    <i className="far fa-paper-plane"></i>
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default FormSend;
