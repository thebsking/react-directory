import React, { Component } from 'react';
import API from '../../utils/API';

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

    render() {
        return (
            <table>

            </table>
        )
    }
}