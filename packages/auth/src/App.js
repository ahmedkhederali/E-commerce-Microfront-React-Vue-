import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider , createGenerateClassName } from "@material-ui/core/styles";


import SignUp from './components/Signup';
import SignIn from './components/Signin';

const generateClassName= createGenerateClassName({
    productionPrefix:'au'
})
export default ({memoryHistory, onSignIn}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={memoryHistory}>
                <Switch>
                    <Route exact path="/auth/signup">
                        <SignUp onSignIn={onSignIn}/>
                    </Route>
                    <Route exact path="/auth/signin">
                        <SignIn onSignIn={onSignIn}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}