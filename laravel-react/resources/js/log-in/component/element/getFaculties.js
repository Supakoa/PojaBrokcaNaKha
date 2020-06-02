import axios from "axios";
async function fetchFaculties(setFac, _mount) {
    await axios
        .get(`http://127.0.0.1:8000/api/faculties`, {})
        .then(res => {
            if (_mount) {
                const data = res.data.success;
                setFac(data);
            } else {
                console.log("not fetch");
            }
        })
        .catch(error => {
            const result = confirm(error);
            if (result) {
                return null;
            }
        });
}

export default fetchFaculties;
