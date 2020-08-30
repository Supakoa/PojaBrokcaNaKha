import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FormSend = props => {
    const [_message, setMessage] = React.useState({});
    const { t } = useTranslation();
    const handleChange = e => {
        const value = e.target.value;
        console.log(value);

        setMessage({
            ..._message,
            roleId: 1,
            name: "admin",
            messages: value
        });
    };

    const onClickHandle = () => {
        console.log(_message);

        props.settext([_message]);
    };

    return (
        <InputGroup className="mb-3">
            <FormControl
                name="textMessage"
                placeholder={t("menu.message")}
                onChange={handleChange}
                aria-label="textMessage"
                aria-describedby="basic-addon2"
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
