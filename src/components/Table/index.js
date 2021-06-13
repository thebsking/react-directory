import React, { Component } from 'react';
import API from '../../utils/API';
import TableData from '../TableData'

const sortDirections = {
    asc: {
        fn: (a, b) => a.name.first - b.name.first
    },
    dsc: {
        fn: (a, b) => b.name.first - a.name.first
    },
    none: {
        fn: (a, b) => a
    }
}


class Table extends Component {
    state = {
        results: [],
        curerentSort: 'none'
    };

    componentDidMount() {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results })
            })
            .catch(err => console.log(err));
    };
    

    handleInput = (event) => {
        event.preventDefault();
        this.searchByName();
    }

    render() {
        const currentSort = this.state.curerentSort;
        const results = this.state.results;
        console.log(currentSort);
        return (
            
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tenure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...results].map((user) => (
                            <TableData
                                thumbnail={user.picture.thumbnail}
                                username={`${user.name.first} ${user.name.last}`}
                                email={user.email}
                                tenure={`Here for ${user.registered.age} days`}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;