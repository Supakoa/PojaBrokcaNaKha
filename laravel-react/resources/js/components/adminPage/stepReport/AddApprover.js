import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Axios from "axios";
import { first, filter } from "lodash";
import { useSelector, useDispatch } from 'react-redux'
import { chipGroupAction } from "../../../redux/actions";
import { data } from "jquery";
import {_URL} from "../../middleware/URL";

export const AddApprover = props => {
    // props
    const { id } = props;

    // local state
    const [show, setShow] = React.useState(false);
    const [_nameChip, setNameChip] = React.useState(null);
    const [users, setusers] = useState(null)

    // redux
    const redux_chipGroup = useSelector(state => state.chipGroup)
    const dispatch = useDispatch()

    // local variable
    const _names = ["john", "steve", "devid", "luis"]; // not to use

    // local function
    const handleSelect = e => {
        const { value } = e.target;

        if (value !== "0") {
            let filterUsers = users.filter(item => {
                return item.id == value
            })
            filterUsers = first(filterUsers)

            setNameChip(filterUsers);
        }
    };

    const handleClick = () => {
        if (_nameChip) {
            // if (oldChipName[id] !== []) {
            //     setChip([...oldChipName, _nameChip]);
            // } else {
            //     setChip([_nameChip]);
            // }

            let tmpChip
            switch (id) {
                case 0:
                    tmpChip = redux_chipGroup.data.step1
                    break;

                case 1:
                    tmpChip = redux_chipGroup.data.step2
                    break

                case 2:
                    tmpChip = redux_chipGroup.data.step3
                    break

                case 3:
                    tmpChip = redux_chipGroup.data.step4
                    break

                case 4:
                    tmpChip = redux_chipGroup.data.step5
                    break
            }
            if (tmpChip.length > 0) {
                tmpChip.filter(item => {
                    return tmpChip.id == _nameChip.id
                })
            }
            tmpChip.push(_nameChip)
            tmpChip = [...new Set(tmpChip)]

            const sendReduxData = {
                sendChip: tmpChip
            }
            dispatch(chipGroupAction(`UPDATE_STEP_${id+1}`, sendReduxData))

            setShow(false);
        }
    };

    const initState = async () => {
        const users = await Axios.get(`${_URL}/api/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "_authLocal"
                )}`
            }
        }).then(res => {
            const { success } = res.data
            let filterUsers = new Array(success.length)

            for (let i = 0; i < filterUsers.length; i++) {
                filterUsers[i] = success[i]
            }

            filterUsers = filterUsers.filter(item => {
                return item.role_id == 2
            })

            return filterUsers
        })

        setusers(users)
    }

    const addApproverOptions = () => {
        if (users) {
            return users.map((item, idx) => {
                return (
                    <option key={idx.toString()} value={item.id} >{`${item.id}: ${item.title} ${item.first_name} ${item.last_name}`}</option>
                );
            })
        } else {
            return
        }
    }

    // useEffect
    React.useEffect(() => {}); // not to use

    useEffect(() => {
        initState()
    }, [])

    return (
        <>
            <Button
                size="sm"
                variant="info"
                className="mt-2"
                onClick={() => setShow(true)}
            >
                <AddCircleOutlineIcon />
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="modal-addApprover"
                size="sm"
                backdrop="static"
                animation
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>รายชื่อคนตรวจ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="dropdownAddApprover">
                        <Form.Label>ชื่อผู้ตรวจ</Form.Label>
                        <Form.Control as="select" onChange={e => handleSelect(e)} defaultValue={0}>
                            <option value="0" disabled={true}>เลือก</option>
                            {addApproverOptions()}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="d-block">
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleClick}>
                        บันทึก
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
