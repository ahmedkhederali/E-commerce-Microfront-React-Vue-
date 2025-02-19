import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";

const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const MarketingAppLzy = lazy(() => import("./components/MarketingApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default function App() {
  const [isSignedIn,setIsSignedIn]=useState(false)
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
        <Suspense fallback={<Progress/>}> 
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={()=>setIsSignedIn(true)}/>
            </Route>
            <Route path="/" component={MarketingAppLzy} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
}
