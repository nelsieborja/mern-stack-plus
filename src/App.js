import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import NavLink from "./components/NavLink";
import Home from "./views/Home";
import Comments from "./views/Comment";
import NoMatch from "./views/NoMatch";

const title = "You Are Doing Great";
const routes = [
  {
    title: "Home",
    path: "/",
    component: Home,
    exact: true
  },
  {
    title: "Comment",
    path: "/comment",
    component: Comments
  }
];

export default () => (
  <Router>
    <Wrapper>
      <Helmet titleTemplate={`%s - ${title}`} />
      <Title>Latest React Tools!</Title>
      <Nav>{routes.map((route, i) => <NavLink key={i} {...route} />)}</Nav>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
        <Route component={NoMatch} />
      </Switch>
    </Wrapper>
  </Router>
);
