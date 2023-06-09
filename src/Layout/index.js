import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./home/Home";
import CreateDeck from "./Decks/CreateDeck";
import DeckRoutes from "./Decks/DeckRoutes";
import { Switch, Route } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact={true} path='/'>
            <Home />
          </Route>
          <Route exact={true} path='/decks/new'>
            <CreateDeck />
          </Route>
          <Route path='/decks/:deckId'>
            <DeckRoutes />
          </Route>
          <Route path='/'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
