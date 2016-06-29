import React from 'react';
import {connect} from 'react-redux';

export default (ComposedComponent) => {
    class Authentication extends React.Component {
        componentWillMount() {
            if(!this.props.loggedIn){
                this.context.router.push('/');
            }
        }
        //Use componentWillUpdate to redirect user on logout
        componentWillUpdate(nextProps) {
            if(!nextProps.loggedIn) {
                this.context.router.push('/');
            }
        }
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    //Gain access to router
    Authentication.contextTypes = {
        router: function () {
            return React.PropTypes.func.isRequired;
        }
    };

    return connect(({loggedIn})=> {
        return {loggedIn};
    })(Authentication);
};