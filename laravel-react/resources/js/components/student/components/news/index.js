import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carousel: {
                index: 0,
                images: [
                    {
                        alt: "First slide",
                        src:
                            "http://gen-ed.ssru.ac.th/useruploads/images/20200330/2020033015855464553016.png"
                    },
                    {
                        alt: "Second slide",
                        src:
                            "http://gen-ed.ssru.ac.th/useruploads/images/20200309/2020030915837508516704.png"
                    },
                    {
                        alt: "Third slide",
                        src:
                            "http://gen-ed.ssru.ac.th/useruploads/images/20200409/2020040915864081832711.png"
                    },
                    {
                        alt: "First slide",
                        src:
                            "http://gen-ed.ssru.ac.th/useruploads/images/20200406/2020040615861723466921.jpg"
                    }
                ]
            }
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            carousel: {
                ...this.state.carousel,
                index: selectedIndex
            }
        });
    }
    render() {
        return (
            <div>
                <Carousel
                    activeIndex={this.state.index}
                    onSelect={this.handleSelect}
                >
                    {this.state.carousel.images.map((image, index) => {
                        return (
                            <Carousel.Item key={index.toString()}>
                                <Image
                                    // height="450"
                                    className="d-block w-100"
                                    src={image.src}
                                    alt={image.alt}
                                    fluid
                                />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        );
    }
}
