import React, { useState } from "react";
import { Form, Container, Image } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useSelector, useDispatch } from "react-redux";
import {
    initNewsForm,
    updateFile,
    updateRef,
    destroyForm
} from "../../../redux/actions/";

// modal add new news

function FormNews(props) {
    const { response, isCreateProps } = props;

    // redux
    // const file = useSelector(state => state.file) not use
    const dispatch = useDispatch();

    const [_state, _setState] = React.useState({});

    const [inputText, setInputText] = useState("");

    React.useEffect(() => {
        // init state
        !isCreateProps
            ? _setState({
                  ..._state,
                  imagePreviewUrl: response.image,
                  url: response.ref
              })
            : _setState({ files: "", imagePreviewUrl: "", url: "" });

        if (!isCreateProps) {
            // update news
            setInputText(response.ref);

            dispatch(
                initNewsForm({
                    file: response.image,
                    ref: response.ref
                })
            );
        } else {
            // create new news
            dispatch(
                initNewsForm({
                    file: "",
                    ref: ""
                })
            );
        }
    }, []);

    const _handleImageChange = e => {
        e.preventDefault();

        let _name = e.target.name;

        if (e.target.name === "upload") {
            createImage(e);
        } else {
            const _value = e.target.value;

            _setState({
                ..._state,
                [_name]: _value
            });

            // update component and redux
            setInputText(e.target.value);
            dispatch(updateRef(e.target.value));
        }
    };

    const createImage = e => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = e => {
            _setState({
                ..._state,
                file: file,
                imagePreviewUrl: reader.result
            });
            dispatch(updateFile(e.target.result));
        };

        reader.readAsDataURL(file);
    };

    const _previewImage = () => {
        let { imagePreviewUrl } = _state;
        let _imagePreview = null;

        if (imagePreviewUrl) {
            _imagePreview = (
                <Image
                    src={imagePreviewUrl}
                    rounded
                    width="100%"
                    height="300"
                />
            );
        }

        return _imagePreview;
    };

    return (
        <Container>
            <Form>
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
                        type="text"
                        name="urlImage"
                        placeholder="URL"
                        // value={e => console.log(e)}
                        value={inputText}
                        onChange={_handleImageChange}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default FormNews;
