import { BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./Dashboard";

const App = () => {
  return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render = {props => (<Dashboard {...props}/>)} />
        </Switch>
      </BrowserRouter>
  );
}

export default App