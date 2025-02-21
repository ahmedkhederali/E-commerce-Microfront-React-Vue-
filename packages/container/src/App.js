import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch , Redirect } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";
import {createBrowserHistory} from 'history'
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const MarketingAppLzy = lazy(() => import("./components/MarketingApp"));
const DashboardAppLazy = lazy(() => import("./components/DashboardApp"));

const history=createBrowserHistory()
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default function App() {
  const [isSignedIn,setIsSignedIn]=useState(false);
  useEffect(()=>{
    if(isSignedIn){
      history.push('/dashboard')
    }
  },[isSignedIn])
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
        <Suspense fallback={<Progress/>}> 
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={()=>setIsSignedIn(true)}/>
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/"/>}
              <DashboardAppLazy/>
            </Route>
            <Route path="/" component={MarketingAppLzy} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
}
