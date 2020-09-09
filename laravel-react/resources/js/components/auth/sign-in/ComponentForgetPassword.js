import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import validateIndex from "../../middleware/validate";
import Axios from "axios";
import { _urlPostForgetPasswordEmail } from "../../middleware/apis";
import Swal from "sweetalert2";

function ComponentForgetPassword(props) {
    const { t, i18n } = useTranslation();
    const [mailForget, setMailForget] = React.useState("");
    const [isDisBtn, setIsDisBtn] = React.useState(true);
    const [isInValid, setIsInValid] = React.useState(false);
    const [isSend, setIssend] = React.useState(false);
    const language = i18n.language == "th";

    const handleForget = e => {
        setMailForget(e.target.value);
        const isValid = validateIndex(e.target.name, e.target.value);

        setIsDisBtn(!isValid);
        setIsInValid(!isValid);
    };

    const sendMail = async () => {
        setIssend(true);
        if (!!mailForget) {
            Axios.post(
                _urlPostForgetPasswordEmail(),
                { email: mailForget },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(res => {
                    if (res.data.status == 200) {
                        Swal.fire(
                            language ? "ส่งสำเร็จ" : "send success",
                            language
                                ? "ยืนยันอีเมลเรียบร้อย"
                                : res.data.message,
                            "success"
                        ).then(() => setIssend(false));
                    } else {
                        setIsInValid(true);
                        Swal.fire(
                            language ? "ลองอีกครั้ง" : "Try Again!",
                            language ? "อีเมลไม่ถูกต้อง" : res.data.message,
                            "error"
                        ).then(() => setIssend(false));
                    }
                })
                .catch(er => {
                    setIsInValid(true);
                    setIssend(false);
                });
        }
        if (isSend) setIssend(false);
    };

    return (
        <Form className="m-auto effectSection">
            <Form.Group controlId="formBasicForget">
                <Form.Label className="text-info">
                    {t("sign.sign-in.username")}
                </Form.Label>
                <Form.Control
                    onChange={handleForget}
                    type="text"
                    isInvalid={isInValid}
                    name="email"
                    placeholder={t("sign.sign-in.username")}
                />
                <Form.Text>
                    {isSend
                        ? i18n.language === "th"
                            ? "กำลังส่ง..."
                            : "Sending..."
                        : ""}
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    {language ? "อีเมลไม่ถูกต้อง" : "Invalid email"} !!
                </Form.Control.Feedback>
            </Form.Group>

            <div className="w-100 d-flex align-items-center justify-content-between">
                <Button disabled={isDisBtn} onClick={sendMail}>
                    {t("sign.component.btn")}
                </Button>
                <Link
                    to="#"
                    className="list-unstyled text-secondary"
                    onClick={() => props.closeForget(false)}
                >
                    {t("sign.sign-in.signIn")}
                </Link>
            </div>
        </Form>
    );
}

export default ComponentForgetPassword;
