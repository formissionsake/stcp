import React from 'react';
import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";

function Routes() {
    return (
        <>
            <Switch>
                <Route
                    path={["/", "/index.html"]}
                    exact={true}
                    component={SignIn}
                />
                <Route
                    path="/signup"
                    exact={true}
                    component={SignUp}
                />
                <Route
                    path="/main"
                    exact={true}
                    component={Main}
                />
                <Route
                    component={NotFound}
                />
            </Switch>
        </>
    )
}

export default Routes;
