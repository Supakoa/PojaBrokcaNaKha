const { useEffect } = require("react");

import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap';
import { selectFacultyId } from '../../../redux/actions';
import { useSelector } from 'react-redux'

export default function MajorSelect() {

    const [major, setMajor] = useState(null)
    const [focusReduxSelectFaculty, setfocusReduxSelectFaculty] = useState(true)

    const redux_selectFaculty = useSelector(state => state.selectFaculty)

    const initMajor = async () => {

    }

    const changeDisableState = () => {
        ( redux_selectFaculty.id == 0 || typeof redux_selectFaculty.id == 'undefined' ) ? setfocusReduxSelectFaculty(true) : setfocusReduxSelectFaculty(false)
        // if (redux_selectFaculty.id == 0 || typeof redux_selectFaculty.id == 'undefined') {
        //     setfocusReduxSelectFaculty(true)
        // } else {
        //     setfocusReduxSelectFaculty(false)
        // }
    }

    useEffect(() => {
        changeDisableState()
    }, [redux_selectFaculty])

    return (
        <div>
            <Form.Group as={Col} controlId="formUserSelectMajor">
                <Form.Label>สาขา</Form.Label>

                <Form.Control as="select" name="major" disabled={focusReduxSelectFaculty} >
                    <option value={0}>เลือกสาขา</option>
                </Form.Control>
            </Form.Group>
        </div>
    )
}
