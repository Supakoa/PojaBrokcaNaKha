import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

export const StepColors = props => {
    // console.log(props);
    const { numberStep } = props;

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
                                    <Alert.Link href="#">{item}</Alert.Link>
                                </Alert>
                            </Col>
                            <Col xs={6} md={4} className="text-center">
                                <Button
                                    size="sm"
                                    variant="info"
                                    className="mt-2"
                                >
                                    +
                                </Button>
                            </Col>
                            {_num !== 1 ? (
                                <Col xs={12} md={8} className="text-center m-2">
                                    <Button
                                        className="text-dark"
                                        size="sm"
                                        variant="outline-warning"
                                        disabled
                                    >
                                        step {index + 1}
                                    </Button>
                                </Col>
                            ) : null}
                        </Row>
                    </Container>
                );
            }
        });

        return row;
    };

    React.useEffect(() => {
        return () => {};
    }, [numberStep]);

    return <>{numberStep !== 0 ? rowSteps(numberStep) : null}</>;
};
