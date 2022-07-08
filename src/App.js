import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project.";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/projects:id">
              <Project />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
