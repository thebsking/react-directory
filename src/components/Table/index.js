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

    sortByName = () => {
        const { currentSort } = this.state;
        let nextSort;

        if (currentSort === 'dsc') { nextSort = 'asc' }
        else if (currentSort === 'asc') { nextSort = 'none' }
        else if (currentSort === 'none') { nextSort = 'dsc' };

        this.setState({
            curerentSort: nextSort
        })
    };

    // sortByLength = (event) => {
    //     event.preventDefault();
    //     console.log('you clicked to sort')
    // }

    searchByName = (event) => {
        API.search()
            .then((res) => {
                const filter = this.state.search;
                const filteredList = res.data.results.filter(item => {
                    let values = Object.values(item.neame.first)
                        .join('')
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                this.setState(
                    {
                        results: filteredList
                    }
                )
            })
            .catch(err => console.log(err))
    }

    handleInput = (event) => {
        event.preventDefault();
        this.searchByName();
    }

    render() {
        const { currentSort, results } = this.state;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Name<button onClick={this.sortByName} >^</button></th>
                            <th scope="col">Email</th>
                            <th scope="col">Tenure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.sort(sortDirections[currentSort].fn).map((user) => (
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


// sort code exmaple from free code camp

// const sortTypes = {
//   up: {
//     class: 'sort-up',
//     fn: (a, b) => a.net_worth - b.net_worth
//   },
//   down: {
//     class: 'sort-down',
//     fn: (a, b) => b.net_worth - a.net_worth
//   },
//   default: {
//     class: 'sort',
//     fn: (a, b) => a
//   }
// }

// class Table extends React.Component {
//   state = {
//     currentSort: 'default'
//   }

//   onSortChange = () => {
//     const { currentSort } = this.state;
//     let nextSort;

//     if(currentSort === 'down') nextSort = 'up';
//     else if(currentSort === 'up') nextSort = 'default';
//     else if(currentSort === 'default') nextSort = 'down';

//     this.setState({
//       currentSort: nextSort
//     })
//   }

//   render() {
//     const { data } = this.props;
//     const { currentSort } = this.state;

//     return ( data.length > 0 && (
//       <table className="text-left">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>
//               Net Worth
//               <button onClick={this.onSortChange}>
//                 <i className={`fas fa-${sortTypes[currentSort].class}`}></i>
//               </button>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {[...data].sort(sortTypes[currentSort].fn).map(p => (
//             <tr>
//               <td>{p.name}</td>
//               <td>${p.net_worth}b</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     ))
//   }
// }

// const App = () => (
//   <div className="text-center">
//     <h4>A list of top 10 richest billionaires.</h4>
//     <p>Click on the icon next to "Net Worth" to see the sorting functionality</p>

//     <Table data={tableData} />

//     <small>* Data gathered from <a href="https://www.theweek.co.uk/people/57553/top-billionaires-who-richest-person-world" target="_blank">theweek.co.uk</a></small>
//   </div>
// );


// ReactDOM.render(<App />, document.getElementById('app'));
// View Compiled
// Resources1× 0.5× 0.25×Rerun