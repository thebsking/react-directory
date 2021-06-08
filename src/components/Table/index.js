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
            <table>
                <thead>
                <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Tenure</th>
                </tr>
                
                </thead>
            </table>
        )
    }
}

export default Table;