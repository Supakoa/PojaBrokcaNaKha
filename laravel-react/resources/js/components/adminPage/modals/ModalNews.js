import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import FormNews from "../news/FormNews";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { newsActions } from "../../../redux/actions";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { _URL } from "../../middleware/URL";

export default function ModalNews(props) {
    const { t } = useTranslation();

    // attibute type if true are Modal Add or false are Modale Edit
    // props : isCreateProps and response are props in this ModalNews
    const { isCreateProps, response } = props;

    // local state
    const [isShow, setIsShow] = React.useState(false);
    const [formNews, setFormNews] = useState({
        image: null,
        ref: null
    });
    const [disabledAddButton, setDisabledAddButton] = useState(true);

    // local variable
    // const apiPath = `http://localhost:8000/api/news`
    const apiPath = `${_URL}/api/news`;
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        onOpen: toast => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        }
    });

    // redux
    const redux_showNews = useSelector(state => state.showNews);
    const dispatch = useDispatch();

    const checkAddNews = () => {
        if (formNews.image && formNews.ref) {
            setDisabledAddButton(false);
        } else {
            setDisabledAddButton(true);
        }
    };

    const initlocalFormNews = () => {
        if (!isCreateProps) {
            setFormNews({
                image: response.image,
                ref: response.ref
            });
        }
    };

    const saveFormToDB = async () => {
        if (isCreateProps) {
            await Axios.post(`${apiPath}`, formNews, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            }).then(res => {
                if (res.status == 201) {
                    let tmp_showNews = [...redux_showNews.data, res.data];

                    dispatch(newsActions("INIT_SHOW_NEWS", tmp_showNews));

                    setIsShow(false);

                    Toast.fire({
                        icon: "success",
                        title: "เพิ่มข้อมูลสำเร็จ"
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "เพิ่มข้อมูลไม่สำเร็จ"
                    });
                }
            });
        } else {
            const id = response.id;

            Axios.patch(`${apiPath}/${id}`, formNews, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            }).then(res => {
                console.log("res", res);
                if (res.status == 200) {
                    let tempShowNews = redux_showNews.data;

                    let updateIndex = tempShowNews.findIndex(item => {
                        return item.id == res.data.id;
                    });

                    tempShowNews[updateIndex] = {
                        ...tempShowNews[updateIndex],
                        ...res.data
                    };

                    dispatch(newsActions("INIT_SHOW_NEWS", tempShowNews));

                    setIsShow(false);

                    Toast.fire({
                        icon: "success",
                        title: "แก้ไขสำเร็จ"
                    });
                } else {
                    Toast.fire({
                        icon: "error",
                        title: "แก้ไขไม่สำเร็จ"
                    });
                }
            });
        }
    };

    useEffect(() => {
        initlocalFormNews();
    }, []);

    useEffect(() => {
        checkAddNews();
    }, [formNews]);

    return (
        <>
            {/* button create or edit : will convert by isCreateProps state*/}
            <Button
                size="sm"
                onClick={() => setIsShow(true)}
                variant={isCreateProps ? "info" : "warning"}
                className="text-light"
            >
                {" "}
                {isCreateProps ? t("add") : t("edit")}{" "}
            </Button>

            {/* Modal for edit or create : will convert by isCreateProps state*/}
            <Modal
                animation={true}
                centered={true}
                backdrop="static"
                size="md"
                show={isShow}
                onHide={() => setIsShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {isCreateProps ? t("add") : t("edit")}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormNews
                        response={response}
                        isCreateProps={isCreateProps}
                        formNews={formNews}
                        setFormNews={setFormNews}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setIsShow(false)}
                    >
                        {" "}
                        {t("close")}{" "}
                    </Button>

                    <Button
                        variant={isCreateProps ? "info" : "warning"}
                        onClick={() => saveFormToDB()}
                        disabled={disabledAddButton}
                    >
                        {" "}
                        {t("save")}{" "}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
