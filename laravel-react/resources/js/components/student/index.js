import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import News from "./News";
import ContentStudent from "./components";
export default function Student(props) {
    let { path, url } = useRouteMatch();
    React.useEffect(() => {
        return () => {};
    }, []);
    return (
        <section>
            <Header url={url} user={props.user} />
            <News />
            <section className="app">
                <Container>
                    <ContentStudent pathLink={path} />
                </Container>
            </section>
            <Footer />
        </section>
    );
}
