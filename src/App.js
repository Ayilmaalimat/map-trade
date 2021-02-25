import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import DataPage from "./pages/Data/DataPage";
import NotFoundPage from "./pages/404/404";

const App = props =>{
    return(
      <Switch>
          <Route path={["/", "/trade-flow", "/products", "/provide", "/client"]} exact component={DataPage}/>
          <Route path={'*'} exact  component={NotFoundPage} />
      </Switch>
    )
}
export default App