import React from "react";
import {Carousel, Image} from "react-bootstrap";
import Axios from "axios";
import {_URL} from "../../../middleware/URL";

export default function News () {
    const [news, setNews] = React.useState([])
    const [index, setIndex] = React.useState(0);

    const fetchNews = async () => {
        await Axios.get(`${_URL}/api/news`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("_authLocal")}`
            }
        }).then(res => {
            setNews(res.data)
        });
    };

    console.log(news)


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    React.useEffect(()=>{
        const abort = new AbortController()
        if (news.length === 0){
            fetchNews({signal:abort.signal})
        }
        return ()=>{
            abort.abort()
        }
    },[])


    return (
            <div>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                >
                    {news.map((image, index) => {
                        return (
                            <Carousel.Item key={index.toString()}>
                                <Image
                                    // height="450"
                                    className="d-block w-100"
                                    src={`storage/${image.image}`}
                                    alt={image.ref}
                                    fluid
                                />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        );

}
