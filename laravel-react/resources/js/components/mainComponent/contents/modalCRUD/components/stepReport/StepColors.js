import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { AddChecker } from "./AddChecker";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
export const StepColors = props => {
    const { numberStep } = props;
    const [_chipName, setChipName] = React.useState([]);

    const handleClickDelete = e => {};

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
                                    {_chipName.map((chip, idx) => {
                                        return (
                                            <Chip
                                                color="primary"
                                                key={idx.toString()}
                                                avatar={
                                                    <Avatar>{chip[0]}</Avatar>
                                                }
                                                label={chip}
                                                onDelete={handleClickDelete}
                                            />
                                        );
                                    })}
                                </Alert>
                            </Col>
                            <Col xs={6} md={4} className="text-center">
                                <AddChecker
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

    React.useEffect(() => {
        return () => {};
    }, [numberStep, _chipName]);

    return <>{numberStep !== 0 ? rowSteps(numberStep) : null}</>;
};
