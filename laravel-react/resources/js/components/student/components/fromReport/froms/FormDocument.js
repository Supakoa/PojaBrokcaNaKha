import React from "react";

const FormDocument = props => {
    const { patternInput } = props;
    var _inputTemp = JSON.parse(patternInput);

    // React.useEffect(() => {
    //     setTest(patternInput);
    // }, [patternInput]);

    console.error(_inputTemp);
    return <div></div>;
};

export default FormDocument;
