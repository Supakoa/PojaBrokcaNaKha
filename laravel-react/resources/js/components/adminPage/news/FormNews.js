import React, { useEffect } from "react";
import { Form, Container, Image } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Axios from "axios";
import Swal from "sweetalert2";
import { _URL } from "../../middleware/URL";
import { useTranslation } from "react-i18next";

// modal add new news

function FormNews({ isCreateProps, setFormNews, formNews }) {
    const { i18n } = useTranslation();
    // local variable
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

    // function
    const _handleImageChange = e => {
        e.preventDefault();

        if (e.target.name === "upload") {
            createImage(e);
        } else {
            const val = e.target.value;
            setFormNews({
                image: formNews.image,
                ref: val
            });
        }
    };

    const createImage = async e => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append("image", file);

        await Axios.post(`${_URL}/api/uploadNews`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            if (res.status == 200) {
                Toast.fire({
                    icon: "success",
                    title: "อัพโหลดสำเร็จ"
                });

                setFormNews({
                    image: res.data,
                    url: formNews.url
                });
            } else {
                Toast.fire({
                    icon: "warning",
                    title: "เกิดข้อผิดพลาดในการอัพโหลด"
                });
            }
        });
    };

    const _previewImage = () => {
        let _imagePreview = null;

        if (formNews.image) {
            return (
                <Image
                    src={`/storage/` + formNews.image}
                    rounded
                    className="mt-4"
                    width="auto"
                    height="150"
                />
            );
        }

        return _imagePreview;
    };

    // usesEffect
    useEffect(() => {
        return () => {
            if (isCreateProps) {
                setFormNews({
                    image: null,
                    ref: null
                });
            }
        };
    }, []);

    // return component

    return (
        <Container>
            <Form>
                <Form.Label>
                    {i18n.language === "th" ? "รูปข่าว" : "Image"}
                </Form.Label>
                <Container
                    className="w-100 d-flex justify-content-center border rounded p-0"
                    style={{ minHeight: "200px" }}
                >
                    {_previewImage()}

                    <Form.File
                        accept="image/*"
                        className="d-none"
                        id="icon-button-file"
                        type="file"
                        name="upload"
                        onChange={_handleImageChange}
                    />

                    <label
                        htmlFor="icon-button-file"
                        className="position-absolute align-self-center"
                    >
                        <IconButton
                            aria-label="upload picture"
                            component="span"
                        >
                            <PhotoCamera fontSize="large" />
                        </IconButton>
                    </label>
                </Container>

                <hr />

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>URL</Form.Label>
                    <Form.Control
                        type="url"
                        name="urlImage"
                        placeholder={
                            i18n.language === "th" ? "ที่อยู่รูป" : "URL"
                        }
                        // value={e => console.log(e)}
                        defaultValue={formNews.ref}
                        onChange={_handleImageChange}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default FormNews;
