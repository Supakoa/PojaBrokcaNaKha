import axios from "axios";

const selectedFac = async (value, funcSet) => {
    // const facId = Number(value);
    if (!isNaN(value)) {
        await axios
            .get(`http://127.0.0.1:8000/api/faculties/${value}/majors`)
            .then(res => {
                funcSet(res.data);
                // return res.data;
            });
    }
};

export default selectedFac;
