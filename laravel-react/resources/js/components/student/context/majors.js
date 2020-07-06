import axios from "axios";

const majors = async _facId => {
    const _majors = await axios
        .get(`http://127.0.0.1:8000/api/faculties/${_facId}/majors`)
        .then(res => {
            funcSet(res.data);
            // return res.data;
        });

    return _majors;
};

export default majors;
