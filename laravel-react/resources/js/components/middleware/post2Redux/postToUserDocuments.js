import { fetchUserDoc } from "../axios/fetchUserDoc";

const post2UserDocuments = async _props => {
    const _documents = await fetchUserDoc(_props);
    if (_documents) {
        _props.dispatch(_props.acUserDocs(_documents));
    }
};

export default post2UserDocuments;
