import Info from "./components/Info/Info"
import Cardlist from "./components/Cardlist/Cardlist"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './styles/main.css'

export default function App() {

  return(
    <>
    <div className="app">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Cardlist} />
            <Route path="/sobre/001" component={Info} />
        </Switch>
      </BrowserRouter>
    </div>
    </>
  )
}
