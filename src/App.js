import React from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import routes from "./routers/routes";
import history from "./routers/history";
import "./internationalization";

function App() {
  const RouteWithLayout = ({
    component: Component,
    layout: Layout,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  };

  const routeComponents = routes.map(({ path, layout, component }, key) => {
    return (
      <RouteWithLayout
        key={key}
        exact
        path={path}
        layout={layout}
        component={component}
      />
    );
  });
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>{routeComponents}</Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
