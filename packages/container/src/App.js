import React from "react";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter ,Route , Switch} from "react-router-dom";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import AuthApp from "./components/AuthApp";

const generateClassName= createGenerateClassName({
  productionPrefix:'co'
})
export default function App() {
  return (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
        <Header />
      <Switch>
        <Route exact path="/" component={MarketingApp} />
        <Route path="/auth/signin" component={AuthApp} />
      </Switch>
    </BrowserRouter>
    </StylesProvider>
  );
}
