import React, { Suspense } from "react";

import { NavLink, Switch, Route } from "react-router-dom";
import adminRoutes from "../routes/adminRoutes";

const AdminPage = ({ match, location, history }) => {
  const onHandleClick = () => {
    if (location.state?.from) {
      history.push(location.state.from);
    }
  };

  return (
    <>
      <h2>Admin</h2>
      <button type="button" onClick={onHandleClick}>
        BACK
      </button>
      <nav>
        <ul>
          {adminRoutes.map((item) => (
            <li key={item.path}>
              <NavLink to={match.path + item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {adminRoutes.map((item) => (
            <Route
              path={match.url + item.path}
              component={item.component}
              key={item.path}
            />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default AdminPage;
