import { BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css'
import DashboardTest from "./pages/DashboardTest";
import NavbarTest from "./pages/NavbarTest";


const App = () => {
  return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render = {props => (<Dashboard {...props}/>)} />
            <Route exact path="/home" render = {props => (<DashboardTest {...props}/>)} />
            <Route exact path="/manga" render = {props => (<NavbarTest {...props}/>)} />
        </Switch>
      </BrowserRouter>
  );
}

export default App