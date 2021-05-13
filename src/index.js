import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
