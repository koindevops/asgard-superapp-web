import React from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import routes from "./routers/routes";
import history from "./routers/history";
import Helmet from "react-helmet";
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
      <Helmet>
        <meta
          name="description"
          content="Wujudkan segala impian finansialmu di masa depan, hanya melalui satu dasbor dan ujung jarimu dengan KoinWorks, 
          super financial app pertama di Indonesia. | 
          Take control of all your financial goals for the future with the most convenient app, right in one dashboard, right at your
           fingertips."
        />
        <meta name="kw-image:image:src" content={`./assets/image/koinworks-super-financial-app-pertama-di-indonesia.png`}></meta>
        <title>KoinWorks | Super Financial App Pertama di Indonesia</title>
      </Helmet>
      <Router history={history}>
        <Switch>{routeComponents}</Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
