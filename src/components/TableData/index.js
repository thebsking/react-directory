import React from 'react';

function tableData(props) {
        return (
            <tr>
                <td><img src={props.thumbnail} alt="employee"></img></td>
                <td><h2> {props.name}</h2></td>
                <td><p> {props.email}</p></td>
                <td><p> {props.tenure}</p></td>
            </tr>
        )
    }

export default tableData;