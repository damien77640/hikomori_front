import { BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css'
import DashboardTest from "./pages/DashboardTest";
import Detail_manga from "./pages/Detail_manga";
import NavbarTest from "./pages/NavbarTest";
import Map from "./pages/Map";
import Login_t from "./pages/Login_t"





const App = () => {
  return(
      <BrowserRouter>
        <Switch>
        
            <Route exact path="/" render = {props => (<Dashboard {...props}/>)} />
            <Route exact path="/home" render = {props => (<Dashboard {...props}/>)} />
            <Route exact path="/favorites" render = {props => (<DashboardTest {...props}/>)} />
            <Route exact path="/maps" render = {props => (<Map {...props}/>)} />
            <Route exact path="/settings" render = {props => (<DashboardTest {...props}/>)} />
            <Route exact path="/profile" render = {props => (<DashboardTest {...props}/>)} />
            <Route exact path="/manga" render = {props => (<NavbarTest {...props}/>)} />
            <Route exact path="/manga/:id" component={Detail_manga}/>
            
        </Switch>
      </BrowserRouter>
  );
}

export default App