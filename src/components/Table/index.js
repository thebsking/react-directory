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
                this.setState({ results: res.data.results })
            })
            .catch(err => console.log(err));
    };

    sortByLength = () => {
        const arr = this.state.results;
        const sortedArr = arr.sort((a, b) => (a.registered.age > b.registered.age) ? 1 : -1);
        console.log(arr, sortedArr);
        this.setState({ results: sortedArr })
    }

    render() {
        const results = this.state.results;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tenure<button className="btn btn-secondary" onClick={this.sortByLength}>Sort</button></th>
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