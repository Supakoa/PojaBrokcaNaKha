import React from "react";
import { Form, Container, Image } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

function FormNews() {
    const [_state, _setState] = React.useState({
        file: [],
        imagePreviewUrl: "",
        url: ""
    });

    const _handleImageChange = e => {
        let _name = e.target.name;
        e.preventDefault();
        if (_name === "upload") {
            let reader = new FileReader();
            let file = e.target.files[0];
            // console.log(file);

            reader.onloadend = () => {
                _setState({
                    ..._state,
                    file: file,
                    imagePreviewUrl: reader.result
                });
            };

            reader.readAsDataURL(file);
        } else {
            let _value = e.target.value;
            console.log(_value);
            _setState({
                ..._state,
                [_name]: _value
            });
        }
    };

    const _previewImage = () => {
        let { imagePreviewUrl } = _state;
        // console.log(imagePreviewUrl);

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
                        onChange={_handleImageChange}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default FormNews;
