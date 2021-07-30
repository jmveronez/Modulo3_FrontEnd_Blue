import Cardlist from "./Components/Cardlist/Cardlist";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Infos from "./Components/Infos/Infos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Cardlist} />
        <Route path="/sobre/:id" exact={true} component={Infos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
