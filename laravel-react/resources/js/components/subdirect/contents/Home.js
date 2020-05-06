import React, {Component} from 'react';
import MaterialTable from 'material-table';
import StickyHaedTable from "./tableData/StickyHaedTable";
import SortingAndSelecting from "./tableData/SortingAndSelecting";
import axios from 'axios';
import {Image} from "react-bootstrap";


export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            persons: null,
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                { title: 'Birth Place', field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
            ],
            data: [
                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34,}
            ],
        }
    }

    async componentDidMount() {
        this.setState({
            persons = await this.getPersons()
        })
    }

    getPersons = () => {
        await axios.get(`https://reqres.in/api/users?page=2`)
            .then(res => {
                // this.setState({persons: res.data})
                return res
        })
    }

    checkItem(){
        if(this.state.persons === null){
            return <p> empty </p>
        }else{
            console.log(this.state.persons.data)
            return (
                <ul>
                    {this.state.persons.data.map( person =>
                        <Image key={person.id} src={person.avatar}/>
                        // <li key={person.id}>
                        //
                        //     {person.email}
                        // </li>
                    )}
                </ul>
            )

        }
    }

    render(){
        return(
            <div>
                {this.checkItem()}

                {/*<MaterialTable*/}
                {/*    stickyHeader*/}
                {/*    title="Editable Example"*/}
                {/*    columns={this.state.columns}*/}
                {/*    data={this.state.data}*/}
                {/*    editable={{*/}
                {/*        onRowAdd: (newData) =>*/}
                {/*            new Promise((resolve) => {*/}
                {/*                setTimeout(() => {*/}
                {/*                    resolve();*/}
                {/*                    this.setState((prevState) => {*/}
                {/*                        const data = [...prevState.data];*/}
                {/*                        data.push(newData);*/}
                {/*                        return { ...prevState, data };*/}
                {/*                    });*/}
                {/*                }, 600);*/}
                {/*            }),*/}
                {/*        onRowUpdate: (newData, oldData) =>*/}
                {/*            new Promise((resolve) => {*/}
                {/*                setTimeout(() => {*/}
                {/*                    resolve();*/}
                {/*                    if (oldData) {*/}
                {/*                       this.setState((prevState) => {*/}
                {/*                            const data = [...prevState.data];*/}
                {/*                            data[data.indexOf(oldData)] = newData;*/}
                {/*                            return { ...prevState, data };*/}
                {/*                        });*/}
                {/*                    }*/}
                {/*                }, 600);*/}
                {/*            }),*/}
                {/*        onRowDelete: (oldData) =>*/}
                {/*            new Promise((resolve) => {*/}
                {/*                setTimeout(() => {*/}
                {/*                    resolve();*/}
                {/*                   this.setState((prevState) => {*/}
                {/*                        const data = [...prevState.data];*/}
                {/*                        data.splice(data.indexOf(oldData), 1);*/}
                {/*                        return { ...prevState, data };*/}
                {/*                    });*/}
                {/*                }, 600);*/}
                {/*            }),*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<hr/>*/}
                {/*<StickyHaedTable/>*/}
                {/*<hr/>*/}
                {/*<SortingAndSelecting/>*/}
            </div>
        );
    };
}
