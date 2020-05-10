import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

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
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL8okAo2_mmHw5EAHSjfx_hmUa9ne7sGefginVL2LaubkjPl1v&usqp=CAU"
                    },
                    {
                        alt: "Second slide",
                        src:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEiMGZ7yY3IGKqxUm5n_uKYEE8e-FtSKzgNAc-KPZG6LJdBMQa&usqp=CAU"
                    },
                    {
                        alt: "Third slide",
                        src:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL8okAo2_mmHw5EAHSjfx_hmUa9ne7sGefginVL2LaubkjPl1v&usqp=CAU"
                    },
                    {
                        alt: "First slide",
                        src:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL8okAo2_mmHw5EAHSjfx_hmUa9ne7sGefginVL2LaubkjPl1v&usqp=CAU"
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
                                <img
                                    width="100%"
                                    height="450"
                                    className="d-block w-100"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        );
    }
}
