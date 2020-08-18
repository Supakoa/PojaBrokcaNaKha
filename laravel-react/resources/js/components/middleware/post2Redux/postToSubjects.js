import { getSubjects } from "../axios/getSubject";

const post2Subjects = async props => {
    const _subjects = await getSubjects(props.token);

    if (_subjects) {
        props.dispatch(props.acSubject(_subjects));
    }
};

export default post2Subjects;
