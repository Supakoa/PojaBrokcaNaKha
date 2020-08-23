import React, { useEffect } from "react";
import { Container, Row, Col, Alert, Button, Badge } from "react-bootstrap";
import { AddApprover } from "./AddApprover";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { array, number } from "prop-types";
import { chipGroupAction } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export const StepColors = props => {
    // props
    const { numberStep } = props;

    // local state
    // const [_chipName, setChipName] = React.useState([]);

    //redux
    const rerdux_chipGroup = useSelector(state => state.chipGroup);
    const dispatch = useDispatch();

    // local variable

    // function
    const initState = () => {
        dispatch(chipGroupAction("NEW_CHIP_GROUP", numberStep));
    };

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

    // useEffect
    React.useEffect(() => {
        initState();
    }, [numberStep]);

    // component with condition
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
                // return (
                //     <Chip
                //         id={item.id}
                //         color="primary"
                //         key={idx.toString()}
                //         avatar={
                //             <Avatar>{item.id}</Avatar>
                //         }
                //         label={`${item.title} ${item.first_name} ${item.last_name}`}
                //         onDelete={handleClickDelete}
                //     />
                // )
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

    const rowSteps = number => {
        const _colorSet = ["primary", "info", "success", "warning", "danger"];
        const _num = Number(number);

        const row = _colorSet.map((item, index) => {
            if (index + 1 <= _num) {
                return (
                    <Container key={index.toString()}>
                        <Row className="mb-2">
                            <Col xs={12} md={8}>
                                <Alert variant={item} className="p-2 mb-0">
                                    step {index + 1}:{" "}
                                    {returnStepComponent(index)}
                                </Alert>
                            </Col>
                            <Col xs={6} md={4} className="text-center">
                                <AddApprover
                                    id={index}
                                    key={item}
                                />
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
