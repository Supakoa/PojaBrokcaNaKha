import React from "react";
import { Form, Col } from "react-bootstrap";
import ModalImage from "../../../tableReport/modal/ModalImage";

const FileOfDoc = ({ inputData, handle, lang, defaultData }) => {
    const [_preview, setPreview] = React.useState({});

    const createImagePreview = e => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setPreview({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
        handle(e);
    };

    return (
        <div className="d-table">
            <Form.Group
                md={inputData.size}
                lg={inputData.size}
                as={Col}
                controlId={inputData.tag_type}
            >
                <Form.File
                    name={inputData.type}
                    id={inputData.id}
                    label={
                        lang === "th" ? inputData.th_name : inputData.eng_name
                    }
                    onChange={createImagePreview}
                />
            </Form.Group>
            {!!defaultData || !!_preview.imagePreviewUrl ? (
                <ModalImage
                    isNewImage={!!_preview.imagePreviewUrl}
                    src={
                        _preview.imagePreviewUrl
                            ? _preview.imagePreviewUrl
                            : defaultData
                    }
                />
            ) : null}
        </div>
    );
};

export default FileOfDoc;
