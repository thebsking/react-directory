import React, { Component } from 'react';
import API from '../../utils/API';
import TableData from '../TableData'

class Table extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results }, console.log(res.data.results))
            })
            .catch(err => console.log(err));
    };

    

    render() {
        return (
            <div>
            <table>
                <thead>
                <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Tenure</th>
                </tr>
                </thead>
                <tbody>
                {this.state.results.map((user) => (
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