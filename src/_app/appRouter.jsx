import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"

class AppRouter extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/about" component={} title="Over Ons"/>
                    <Route path="/gallery" component={} title="Galerij"/>
                    <Route path="/contact" component={} title="Contact"/>
                    <Route path="/" component={} title="Home"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;