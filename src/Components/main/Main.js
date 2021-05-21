import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

const Main = ({ isAuth }) => {
  return (
    <main>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {mainRoutes.map((item) =>
            item.isPrivate ? (
              <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...item} key={item.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.tokens.idToken,
});

export default connect(mapStateToProps)(Main);
