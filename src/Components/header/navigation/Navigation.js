import React from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../../redux/auth/authActions";
import mainRoutes from "../../../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";
import NavigatoinListItem from "./NavigatoinListItem";

const Navigation = ({ location, isAuth }) => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(logOut());

  return (
    <NavigationContainer>
      <ul className="list">
        {mainRoutes.map((item) => (
          <NavigatoinListItem
            item={item}
            location={location}
            key={item.path}
            isAuth={isAuth}
          />
        ))}
        {isAuth && (
          <li>
            <button type="button" onClick={signOut}>
              LogOut
            </button>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.tokens.idToken,
});

export default connect(mapStateToProps, {})(withRouter(Navigation));
