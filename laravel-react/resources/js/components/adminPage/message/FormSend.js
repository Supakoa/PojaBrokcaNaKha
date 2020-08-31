import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { postMessage } from "../../middleware/axios/postMessage";

const FormSend = ({ userId,_listUsers,setListUsers }) => {
    const [_message, setMessage] = React.useState("");
    const { t } = useTranslation();
    const handleChange = e => {
        console.log(e.target.value);
        setMessage(e.target.value);
    };

    const onClickHandle = async () => {
        if (!!_message) {
        let  new_message =  await postMessage(localStorage._authLocal, {
                message: _message,
                user_id: userId
            });
        if (new_message){
            let user = _listUsers.find(value => value.id === userId);

            if (!!user) {
                if (user.messages.findIndex(value => value.id === new_message.count_messages +1) === -1){

                    user.messages.push(new_message);
                    setListUsers([..._listUsers])
                }
            }
        }
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
