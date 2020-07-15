const { useEffect } = require("react");

import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap';
import { selectMajorId } from '../../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

export default function MajorSelect() {

    const [major, setMajor] = useState(null)
    const [focusReduxSelectFaculty, setfocusReduxSelectFaculty] = useState(true)

    const redux_selectFaculty = useSelector(state => state.selectFaculty)
    const dispatch = useDispatch()

    const initMajor = async () => {
        if (redux_selectFaculty.id == 0 || typeof redux_selectFaculty.id == 'undefined') {
            setMajor(null)
        } else {
            const getMajor = await Axios.get(`http://localhost:8000/api/faculties/${redux_selectFaculty.id}/majors`).then(res => {
                return res.data
            })

            setMajor(getMajor)
        }
    }

    const changeDisableState = () => {
        // ( redux_selectFaculty.id == 0 || typeof redux_selectFaculty.id == 'undefined' ) ? setfocusReduxSelectFaculty(true) : setfocusReduxSelectFaculty(false)
        // if (redux_selectFaculty.id == 0 || typeof redux_selectFaculty.id == 'undefined') {
        //     setfocusReduxSelectFaculty(true)
        // } else {
        //     setfocusReduxSelectFaculty(false)
        // }
        setfocusReduxSelectFaculty(redux_selectFaculty.id == 0 || typeof redux_selectFaculty.id == 'undefined')

        initMajor()
    }

    const handleSelectMajor = (e) => {
        dispatch(selectMajorId(e.target.value))
    }

    useEffect(() => {
        changeDisableState()
    }, [redux_selectFaculty])

    const renderMajorOption = () => {
        if (major) {
            return major.map((res, index) => {
                return (<option key={res.id} value={res.id}>{res.name}</option>)
            })
        } else {
            return
        }
    }

    return (
        <div>
            <Form.Group as={Col} controlId="formGroupMajorSelect">
                <Form.Label>สาขา</Form.Label>

                <Form.Control as="select" name="major" onChange={e => handleSelectMajor(e)} disabled={focusReduxSelectFaculty} >
                    <option value={0}>เลือกสาขา</option>
                    { renderMajorOption() }
                </Form.Control>
            </Form.Group>
        </div>
    )
}
