import React, { useEffect, useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import Axios from 'axios'
import { selectFacultyId } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import {useTranslation} from 'react-i18next';

export default function FacultySelect() {
    const {t, i18n, ready} = useTranslation('', {useSuspense: false});
    const [faculty, setFaculty] = useState(null)

    // redux
    const dispatch = useDispatch()

    const apiPath = `http://localhost:8000/api/faculties`

    const initFaculty = async () => {
        const getFaculty = await Axios.get(apiPath).then(res => {
            return res.data.success
        })

        setFaculty(getFaculty)
    }

    const RenderFacultyOption = () => {
        if (faculty) {
            return faculty.map((res, index) => {
                return <option key={res.id} value={res.id}>{res.name}</option>
            })
        } else {
            return
        }
    }

    const handleSelectFaculty = (e) => {
        dispatch(selectFacultyId(e.target.value))
    }

    useEffect(() => {
        initFaculty()
    }, [])

    return (
        <div>
            <Form.Group as={Col} controlId="formGroupFacultySelect">
                <Form.Label>{t('faculty.index')}</Form.Label>

                <Form.Control as="select" name="facultySelect" onChange={e => handleSelectFaculty(e)}>
                    <option key="0" value={0} >{t('faculty.selectFaculty')}</option>
                    { RenderFacultyOption() }
                </Form.Control>
            </Form.Group>
        </div>
    )
}
