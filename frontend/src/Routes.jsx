import React from'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './features/common/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TimeLine from './components/timeline/TimeLine';

const BaseRouter = () => (
    <Switch>
        <Route path="/register" component = {Register} />
        <Route path="/login" component = {Login} />
        <PrivateRoute exact path='/' component={TimeLine} />
    </Switch>
);
export default BaseRouter;