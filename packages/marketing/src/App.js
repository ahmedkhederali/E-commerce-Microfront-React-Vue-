import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider , createGenerateClassName } from "@material-ui/core/styles";


import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import ViewProduct from './components/ViewProduct';

const generateClassName= createGenerateClassName({
    productionPrefix:'ma'
})
export default ({memoryHistory}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={memoryHistory}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route exact path="/view/:id" component={ViewProduct} />

                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}