import React, { useEffect, useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import Axios from 'axios'
import { selectFacultyId } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function FacultySelect() {

    const [faculty, setFaculty] = useState(null)

    // redux
    const redux_selectFaculty = useSelector(state => state.selectFaculty)
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
                <Form.Label>คณะ</Form.Label>

                <Form.Control as="select" name="facultySelect" onChange={e => handleSelectFaculty(e)} value={redux_selectFaculty.id}>
                    <option key="0" value={0} >เลือกคณะ</option>
                    { RenderFacultyOption() }
                </Form.Control>
            </Form.Group>
        </div>
    )
}
