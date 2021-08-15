import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { userContext } from "./../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(userContext);

    // const token = sessionStorage?.getItem("userEmail");
    console.log(loggedInUser.email);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;