import React from 'react';

function tableData(props) {
        return (
            <tr>
                <td><img src={props.thumbnail} alt="employee"></img></td>
                <td><p> {props.username}</p></td>
                <td><p> {props.email}</p></td>
                <td><p> {props.tenure}</p></td>
            </tr>
        )
    }

export default tableData;