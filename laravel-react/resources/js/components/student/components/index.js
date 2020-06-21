import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Body";
import Profile from "./Profile";

function ContentStudent(props) {
    const { pathLink } = props;
    return (
        <div className="mt-2">
            <Switch>
                <Route exact path={`${pathLink}`} component={Main} />
                <Route path={`${pathLink}/profile`} component={Profile} />
            </Switch>
        </div>
    );
}

export default ContentStudent;
