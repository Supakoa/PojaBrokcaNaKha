import fetchForms from "../axios/fetchForms";

const post2Documents = async props => {
    const _tempDocs = await fetchForms(props.token);
    if (_tempDocs) {
        props.dispatch(props.acDocTemp(_tempDocs));
    }
};

export default post2Documents;
