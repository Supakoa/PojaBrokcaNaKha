import React, { useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
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
    const [_chipName, setChipName] = React.useState([]);

    //redux
    const rerdux_chipGroup = useSelector(state => state.chipGroup);
    const dispatch = useDispatch();

    // local variable

    // function
    const handleClickDelete = e => {
        const { id } = e.target;
        console.log(e.target);
    };

    const initState = () => {
        let chips = new Array(Number(numberStep));

        dispatch(chipGroupAction("NEW_CHIP_GROUP"));
        setChipName(chips);
    };

    const setNewValue = () => {
        console.log("_chipName", _chipName);
    };

    const updateChipGroup = () => {
        console.log("updateChipGroup");
    };

    // useEffect
    React.useEffect(() => {
        initState();
    }, []);

    useEffect(() => {
        setNewValue();
    }, [_chipName]);

    useEffect(() => {
        updateChipGroup();
    }, [rerdux_chipGroup]);

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
                return (
                    <Chip
                        id={idx}
                        color="primary"
                        key={idx.toString()}
                        avatar={<Avatar>{item.id}</Avatar>}
                        label={`${item.title} ${item.first_name} ${item.last_name}`}
                        onDelete={handleClickDelete}
                    />
                );
            });
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
                                    {/* {_chipName.map((chip, idx) => {
                                        console.log('chip', chip)
                                        let arrayChips = new Array(chip.length)
                                        for (let i = 0; i < array.length; i++) {
                                            arrayChips[i] = chip[i]
                                        }
                                        // arrayChips.map((arrayChip, idx) => {
                                        //     console.log('arrayChip', arrayChip)
                                        // })
                                        return (
                                            <Chip
                                                id={idx}
                                                color="primary"
                                                key={idx.toString()}
                                                avatar={
                                                    <Avatar>{chip.id}</Avatar>
                                                }
                                                label={`${chip.title} ${chip.first_name} ${chip.last_name}`}
                                                onDelete={handleClickDelete(chip.id)}
                                            />
                                        );
                                    })} */}
                                </Alert>
                            </Col>
                            <Col xs={6} md={4} className="text-center">
                                <AddApprover
                                    id={index}
                                    key={item}
                                    setChip={setChipName}
                                    oldChipName={_chipName}
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
