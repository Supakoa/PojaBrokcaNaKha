import React from "react";
import { Container, Row, Col, Breadcrumb, Alert } from "react-bootstrap";
import { AddChecker } from "./AddChecker";
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
                                    <Alert.Link href="#">
                                        step {index + 1}:
                                        <Breadcrumb>
                                            <Breadcrumb.Item>
                                                Home
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                Library
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                Data
                                            </Breadcrumb.Item>
                                        </Breadcrumb>
                                    </Alert.Link>
                                </Alert>
                            </Col>
                            <Col xs={6} md={4} className="text-center">
                                <AddChecker key={item} />
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
    }, [numberStep]);

    return <>{numberStep !== 0 ? rowSteps(numberStep) : null}</>;
};
