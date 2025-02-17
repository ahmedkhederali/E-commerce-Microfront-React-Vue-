import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider , createGenerateClassName } from "@material-ui/core/styles";


import SignUp from './components/SignUp';
import SignIn from './components/Signin';

const generateClassName= createGenerateClassName({
    productionPrefix:'au'
})
export default ({memoryHistory}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={memoryHistory}>
                <Switch>
                    <Route exact path="/auth/signup" component={SignUp} />
                    <Route path="/" component={SignIn} />

                </Switch>
            </Router>
        </StylesProvider>
    </div>
}