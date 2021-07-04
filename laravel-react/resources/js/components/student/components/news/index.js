import React from "react";
import { Carousel, Image, Spinner } from "react-bootstrap";
import Axios from "axios";
import { _URL } from "../../../middleware/URL";
import LoadingComponent from "../../../LoadingComponent/Loading";
// import { Link } from "react-router-dom";

export default function News() {
    const [news, setNews] = React.useState([]);
    const [index, setIndex] = React.useState(0);

    const fetchNews = async () => {
        await Axios.get(`${_URL}/api/news`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            setNews(res.data);
        });
    };

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleToLink = e => {
        window.open(e.target.alt);
    };

    React.useEffect(() => {
        const abort = new AbortController();
        if (news.length === 0) {
            fetchNews({ signal: abort.signal });
        }
        return () => {
            abort.abort();
        };
    }, []);

    return (
        <div>
            {news.length > 0 ? (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {news.map((image, index) => {
                        return (
                            <Carousel.Item key={index.toString()}>
                                <Image
                                    // height="450"
                                    className="d-block w-100"
                                    src={`storage/${image.image}`}
                                    alt={image.ref}
                                    fluid
                                    onClick={handleToLink}
                                />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            ) : (
                <LoadingComponent />
            )}
        </div>
    );
}
