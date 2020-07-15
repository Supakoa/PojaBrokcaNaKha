import axios from "axios";
import headerConfig from "../../../middleware/headerConfig";
import { _urlGetUserDocuments } from "../../../middleware/apis";

const fetchUserDoc = async () => {
    await axios.post(_urlGetUserDocuments(), headerConfig());
};
