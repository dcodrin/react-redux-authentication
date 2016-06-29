import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/index';


class Header extends React.Component {

    constructor() {
        super();

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.props.dispatch(actions.authenticate(!this.props.loggedIn));
    }

    authButton() {
        return (
            <button onClick={this.handleLogin}>{this.props.loggedIn ? 'Sign Out' : 'Sign In'}</button>
        );
    }

    render() {
        return (
            <div>
                {this.props.loggedIn ? <p>Logged In</p> : <p>Logged Out</p>}
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resources">Resources</Link>
                        </li>
                        <li className="nav-item">
                            {this.authButton()}
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}



export default connect(({loggedIn}) => {
    return {
        loggedIn
    };
})(Header);
