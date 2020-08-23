import fetchDocuments from "../axios/fetchDocuments";

const post2Documents = async props => {
    const _tempDocs = await fetchDocuments(props.token);
    if (_tempDocs) {
        props.dispatch(props.acDocTemp(_tempDocs));
    }
};

export default post2Documents;
