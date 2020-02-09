import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { List, ListItem } from "./components/List";
import Anchor from "./components/Anchor";
import Container from "./components/Container";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Programme from "./pages/Programme";

function App() {
  return (
    <Router basename="/">
      <Layout>
        <Header>le Collectif de la Vingtième Commune</Header>
        <Nav>
          <List>
            <ListItem>
            <Link tag={Anchor} waitChunk to="/">Accueil</Link>
            </ListItem>
            <ListItem>
            <Link tag={Anchor} waitChunk to="/programme">Programme</Link>
            </ListItem>
          </List>
        </Nav>
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/programme">
              <Programme />
            </Route>
          </Switch>
        </Container>
        <Footer>le Collectif de la Vingtième Commune - 2020</Footer>
      </Layout>
    </Router>
  );
}

export default App;
