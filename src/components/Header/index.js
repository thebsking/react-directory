import React from 'react';

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark">
                    <h1>Employee Directory</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Employees" aria-label="Search Employees" aria-describedby="button-addon2" disabled />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div><br/>
                    <button>Sort by Tenure</button>
                </nav>
            </div>
        )
    }
}

export default Header;