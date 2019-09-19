import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import * as serviceWorker from "./functions/serviceWorker"

//Components
import App from "./components/app"
import Test from './components/tests/test'

//Redux Store
import store from './store'

ReactDOM.render(
  <Provider store={store}> 
    {/* <App/> */}
    <Test/>
  </Provider>, 
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
