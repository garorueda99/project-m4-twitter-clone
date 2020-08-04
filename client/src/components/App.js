import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/items/:itemId">
              <ItemDetails />
            </Route>
          </Switch>
        </Main>
      </Wrapper>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
