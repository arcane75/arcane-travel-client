import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

initializeAuthentication();

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    
    // console.log(user);
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children : <Redirect
                to={{
                    pathname: "/userlogin",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;