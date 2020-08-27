import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert, Button, Badge } from "react-bootstrap";
import { AddApprover } from "./AddApprover";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { array, number } from "prop-types";
import { chipGroupAction } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { AddGroup } from "./AddGroup";
import Axios from "axios";
import Swal from "sweetalert2";

export const StepColors = props => {
    // props
    const { numberStep, setModalShow, response, groupSteps, setGroupSteps } = props;

    // local state
    const [groupUserSteps, setGroupUserSteps] = useState(null)

    //redux
    const rerdux_chipGroup = useSelector(state => state.chipGroup);
    const dispatch = useDispatch();

    // local variable

    // function
    const initState = () => {
        dispatch(chipGroupAction("NEW_CHIP_GROUP", numberStep));
        // initFormGroupStep()
    };

    // FIXME: not to use now
    const deleteUserOnStep = (item, onStep) => {
        let selectStep
        switch (onStep + 1) {
            case 1:
                selectStep = rerdux_chipGroup.data.step1;
                break;

            case 2:
                selectStep = rerdux_chipGroup.data.step2;
                break;

            case 3:
                selectStep = rerdux_chipGroup.data.step3;
                break;

            case 4:
                selectStep = rerdux_chipGroup.data.step4;
                break;

            case 5:
                selectStep = rerdux_chipGroup.data.step5;
                break;
        }
        selectStep = selectStep.filter(interest => {
            return interest.id != item.id
        })

        const sendReduxData = {
            sendChip: selectStep
        }
        dispatch(chipGroupAction(`UPDATE_STEP_${onStep + 1}`, sendReduxData))
    }

    const initGroupUserSteps = () => {
        console.log('initGroupUserSteps')
        console.log('numberStep', numberStep)
        console.log('groupSteps', groupSteps)
    }

    const handleClickGroup = (item) => {
        console.log('handleClickGroup')
        console.log('item', item)

        Swal.fire({
            title: 'ยืนยันการลบ?',
            text: `คุณต้องการที่จะลบข้อมูล [${item.id}: ${item.th_name}] หรือไม่!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "ลบ",
            cancelButtonText: "ยกเลิก",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
          }).then((result) => {
            if (result.value) {
                Axios.delete(`http://localhost:8000/api/forms/${item.pivot.form_id}/groups`, {
                    data: {
                        group_id: item.id
                    },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "_authLocal"
                        )}`
                    }
                }).then(res => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    let tmp_newGroupSteps = groupSteps
                    tmp_newGroupSteps[item.pivot.state - 1] = res.data
                    setGroupSteps(tmp_newGroupSteps)

                    if (res.status == 200) {
                        Toast.fire({
                            icon: 'success',
                            title: 'ลบข้อมูลกลุ่มสำเร็จ'
                        })
                    } else {
                        Toast.fire({
                            icon: 'warning',
                            title: 'เกิดข้อผิดพลาดในการลบข้อมูล'
                        })
                    }
                })
            }
          })
    }

    // useEffect
    React.useEffect(() => {
        initState();
        initGroupUserSteps()
    }, [numberStep]);

    // component with condition
    // FIXME: not to use now
    const returnStepComponent = index => {
        let selectComponent;
        switch (index + 1) {
            case 1:
                selectComponent = rerdux_chipGroup.data.step1;
                break;

            case 2:
                selectComponent = rerdux_chipGroup.data.step2;
                break;

            case 3:
                selectComponent = rerdux_chipGroup.data.step3;
                break;

            case 4:
                selectComponent = rerdux_chipGroup.data.step4;
                break;

            case 5:
                selectComponent = rerdux_chipGroup.data.step5;
                break;
        }

        if (selectComponent.length > 0) {
            return selectComponent.map((item, idx) => {
                return (
                    <Badge key={idx} pill variant="primary">
                        <Badge variant="light">{$(item.id)}</Badge>
                        {` ${item.title} ${item.first_name} ${item.last_name}`}
                        <Button
                            type="button"
                            className="close rounded-circle btn-sm p-0"
                            aria-label="Close"
                            onClick={e => deleteUserOnStep(item, index)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </Button>
                    </Badge>
                )
            })
        }
    };

    const MapStepComponent = (index) => {
        return groupSteps[index.index].map((item, idx) => {
            return (
                <Button onClick={() => handleClickGroup(item)} className="m-1" key={idx} variant={(item.type == "normal" ? "info" : "warning")}>
                    <Badge pill variant="light">{`${item.id}`}</Badge> {`${item.th_name}`}
                </Button>
            )
        })
    }

    const rowSteps = number => {
        const _colorSet = ["primary", "info", "success", "warning", "danger"];
        const _num = Number(number);

        const row = _colorSet.map((item, index) => {
            if (index + 1 <= _num) {
                return (
                    <Container key={index.toString()}>
                        <Row className="mb-2">
                            <Col xs={12} md={10}>
                                <Alert variant={item} className="p-2 mb-0">
                                    step {index + 1}:{" "}
                                    {/* {returnStepComponent(index)} */}
                                    <MapStepComponent index={index} />
                                </Alert>
                            </Col>
                            <Col>
                                <AddGroup setGroupSteps={setGroupSteps} groupSteps={groupSteps} step={index} setModalShow={setModalShow} response={response} />
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                );
            }
        });

        return row;
    };

    return <>{numberStep !== 0 ? rowSteps(numberStep) : null}</>;
};
