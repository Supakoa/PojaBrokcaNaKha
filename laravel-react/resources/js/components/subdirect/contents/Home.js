import React, { Component } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: null
        };
    }

    componentDidMount() {
        axios.get(`https://reqres.in/api/users?page=2`).then(res => {
            this.setState({
                persons: res.data
            });
        });
    }

    checkItem() {
        // console.log(this.state.persons)
        if (this.state.persons === null) {
            return <p> empty </p>;
        } else {
            return (
                <ul>
                    {this.state.persons.data.map(person => (
                        <li key={person.id}>
                            <Image src={person.avatar} />
                            <p>{`${person.first_name} ${person.last_name}`}</p>
                            <p>{person.email}</p>
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return <div className="text-center">{this.checkItem()}</div>;
    }
}
