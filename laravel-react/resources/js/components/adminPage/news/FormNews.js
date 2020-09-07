import React, { useState, useEffect } from "react";
import { Form, Container, Image } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useDispatch } from "react-redux";
import { initNewsForm, updateFile, updateRef } from "../../../redux/actions/";
import Axios from "axios";
import Swal from "sweetalert2";

// modal add new news

function FormNews({
        response,
        isCreateProps,
        setFormNews,
        formNews
    }) {

    // local state
    const [_state, _setState] = React.useState({});
    const [inputText, setInputText] = useState("");

    // redux
    // const file = useSelector(state => state.file) not use
    const dispatch = useDispatch();

    // local variable
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    // function
    const _handleImageChange = e => {
        e.preventDefault();

        if (e.target.name === "upload") {
            createImage(e);
        } else {
            const val = e.target.value
            setFormNews({
                image: formNews.image,
                ref: val
            })

            // setFormNews(preState => {
            //     return {
            //         ...preState,
            //         ref: e.target.value
            //     }
            // })

            // _setState({
            //     ..._state,
            //     [_name]: _value
            // });

            // // update component and redux
            // setInputText(e.target.value);
            // dispatch(updateRef(e.target.value));
        }
    };

    const createImage = async e => {
        const reader = new FileReader();
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append("image", file);

        // console.log('file', file)
        await Axios.post(
            `http://localhost:8000/api/uploads`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "_authLocal"
                    )}`
                }
            }
        ).then(res => {
            if (res.status == 200) {
                Toast.fire({
                    icon: 'success',
                    title: 'อัพโหลดสำเร็จ'
                })

                console.log('res pathImage:', res)
                setFormNews({
                    image: res.data,
                    url: formNews.url
                })
            } else {
                Toast.fire({
                    icon: 'warning',
                    title: 'เกิดข้อผิดพลาดในการอัพโหลด'
                })

            }
        })

        // reader.onloadend = e => {
        //     _setState({
        //         ..._state,
        //         file: file,
        //         imagePreviewUrl: pathImage
        //     });
        //     dispatch(updateFile(pathImage));
        // };

        // reader.readAsDataURL(file);
    };

    const _previewImage = () => {
        let { imagePreviewUrl } = _state;
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

    const initState = () => {
        // init state
        // !isCreateProps
        //     ? _setState({
        //           ..._state,
        //           imagePreviewUrl: response.image,
        //           url: response.ref
        //       })
        //     : _setState({ files: "", imagePreviewUrl: "", url: "" });

        // init redux state
        // if (!isCreateProps) {
        //     setInputText(response.ref);

        //     dispatch(
        //         initNewsForm({
        //             file: response.image,
        //             ref: response.ref
        //         })
        //     );
        // } else {
        //     dispatch(
        //         initNewsForm({
        //             file: "",
        //             ref: ""
        //         })
        //     );
        // }
    }

    // usesEffect
    useEffect(() => {
        initState()

        return () => {
            if (isCreateProps) {
                setFormNews({
                    image: null,
                    ref: null,
                })
            }
        }
    }, [])

    // return component

    return (
        <Container>
            <Form>
                <Form.Label>Image</Form.Label>
                <Container
                    className="w-100 d-flex justify-content-center border rounded p-0"
                    style={{ minHeight: "200px" }}
                >

                    {_previewImage()}

                    <input
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
                        placeholder="URL"
                        // value={e => console.log(e)}
                        value={formNews.ref}
                        onChange={_handleImageChange}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default FormNews;
