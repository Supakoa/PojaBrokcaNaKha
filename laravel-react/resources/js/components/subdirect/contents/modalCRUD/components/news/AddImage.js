import React from "react";
import { Form } from "react-bootstrap";

function AddImage({ setImage, showImage }) {
    const handleChange = event => {
        const _name = event.target.name;
        const _value = event.target.value;

        if (_name === "imageUpload") {
            const _file = event.target.files[0];
            console.log(_name);
            console.log(_file);
            setImage({
                ...showImage,
                [_name]: _file
            });
        }
        if (_name === "url") {
            console.log(_name);
            console.log(_value);
            setImage({
                ...showImage,
                [_name]: _value
            });
        }

        // console.log(_file);
    };

    return (
        <Form>
            <div className="mb-3">
                <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input
                        type="file"
                        name="imageUpload"
                        onChange={handleChange}
                    />
                    <Form.File.Label data-browse="เลือกรูป">
                        {showImage.imageUpload === null
                            ? "อัพรูปข่าว"
                            : showImage.imageUpload.name}
                    </Form.File.Label>
                    <Form.Control.Feedback>คุณอัพแล้ว</Form.Control.Feedback>
                </Form.File>
            </div>
            <Form.Group controlId="formNewsURL">
                <Form.Label>URL รูปข่าว</Form.Label>
                <Form.Control
                    name="url"
                    type="text"
                    placeholder="www.google.com"
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    );
}

export default AddImage;
