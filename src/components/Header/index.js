import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark">
                    <h1>Employee Directory</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Employees" aria-label="Search Employees" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div><br/>
                    <p>Click Name or Tenure to sort</p>
                </nav>
            </div>
        )
    }
}

export default Header;