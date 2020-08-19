import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ShowDetail = () => {
    const { id } = useParams();
    return <Container className="text-center">the ID Documents:{id}</Container>;
};

export default ShowDetail;
