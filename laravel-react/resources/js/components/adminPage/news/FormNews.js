import React from "react";
import { Form, Container, Image } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

// modal add new news

function FormNews(props) {
    const { response, type } = props;

    const [_state, _setState] = React.useState({
        file: "",
        imagePreviewUrl: "",
        url: ""
    });

    React.useEffect(() => {
        // if (!type) {
        //     _setState({
        //         ..._state,
        //         imagePreviewUrl: response.images,
        //         url: response.url
        //     });
        // } else {
        //     _setState({
        //         file: [],
        //         imagePreviewUrl: "",
        //         url: ""
        //     });
        // }
        (!type) ? _setState({ ..._state, imagePreviewUrl: response.image, url: response.ref }) : _setState({ files: "", imagePreviewUrl: "", url: "" })
    }, []);

    const _handleImageChange = e => {
        e.preventDefault();

        let _name = e.target.name;

        if (_name === "upload") {
            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                _setState({
                    ..._state,
                    file: file,
                    imagePreviewUrl: reader.result
                });
            };

            reader.readAsDataURL(file);
        } else {
            const _value = e.target.value;
            // console.log(_value);
            _setState({
                ..._state,
                [_name]: _value
            });
        }
    };

    const _previewImage = () => {
        let { imagePreviewUrl } = _state;
        // console.log(`imagePreviewUrl: ${imagePreviewUrl}`);
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
        } else {
            console.log('not have data')
        }

        return _imagePreview;
    };

    return (
        <Container>
            <Form>
                <Container
                    className="w-100 d-flex justify-content-center border rounded p-0"
                    style={{ minHeight: "200px" }} >

                    { _previewImage() }

                    <input
                        accept="image/*"
                        className="d-none"
                        id="icon-button-file"
                        type="file"
                        name="upload"
                        onChange={_handleImageChange} />

                    <label
                        htmlFor="icon-button-file"
                        className="position-absolute align-self-center" >
                        <IconButton
                            aria-label="upload picture"
                            component="span" >
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
                        value={!type ? _state.url : ""}
                        onChange={_handleImageChange} />
                </Form.Group>

            </Form>
        </Container>
    );
}

export default FormNews;
