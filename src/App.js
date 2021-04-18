import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import { UserContext } from "./context/UserContext";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

function App() {
  const { currUser } = useContext(UserContext);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/home"
          render={() => (currUser !== "" ? <HomePage /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/"
          render={() =>
            currUser.jwt ? <Redirect to="/home" /> : <LoginPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
