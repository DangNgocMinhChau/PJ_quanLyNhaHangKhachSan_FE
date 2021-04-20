import React from "react";
import MenuLeft from "./MenuLeft";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './../../routers/routes'
import Nav from "./Nav";



function Page(props) {
  function renderContentMenu(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })
    }
    return result;
  }
  return (
    <div id="page-top">
      <div id="wrapper">
        <Router>
          <MenuLeft />
          {/* nội dung */}
          <Nav/>
        </Router> 
      </div>
    </div>
  );
}

export default Page;
