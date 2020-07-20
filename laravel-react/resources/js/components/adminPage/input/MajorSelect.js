const { useEffect } = require("react");

import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap';
import { selectMajorId, selectFacultyId, updateFormEditUserBySingleData } from '../../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import {useTranslation} from 'react-i18next';

export default function MajorSelect() {
    const {t, i18n, ready} = useTranslation('', {useSuspense: false});
    const [major, setMajor] = useState(null)
    const [focusReduxSelectFaculty, setfocusReduxSelectFaculty] = useState(true)

    const redux_selectFaculty = useSelector(state => state.selectFaculty)
    const redux_selectMajor = useSelector(state => state.selectMajor)
    const redux_user = useSelector(state => state.formUser)
    const dispatch = useDispatch()

    const initMajor = async () => {
        if (typeof redux_user.majorId != 'undefined') {
            dispatch(selectMajorId(redux_user.majorId))

            await Axios.get(`http://localhost:8000/api/majors/${redux_user.majorId}`).then(res => {
                dispatch(selectFacultyId(res.data.faculty_id))
            })
        }
    }

    const updateMajor = async () => {
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
        setfocusReduxSelectFaculty(redux_selectFaculty.id == 0 || typeof redux_selectFaculty.id == 'undefined')

        updateMajor()
    }

    const handleSelectMajor = (e) => {
        dispatch(selectMajorId(e.target.value))
        dispatch(updateFormEditUserBySingleData(`majorId`, e.target.value))
    }

    // init Major state if have data in db
    useEffect(() => {
        // updateMajor()
        initMajor()
    }, [redux_user])

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
                <Form.Label>{t('major.index')}</Form.Label>

                <Form.Control as="select" name="major" onChange={e => handleSelectMajor(e)} disabled={focusReduxSelectFaculty} >
                    <option value={0}>{t('major.selectMajor')}</option>
                    { renderMajorOption() }
                </Form.Control>
            </Form.Group>
        </div>
    )
}
