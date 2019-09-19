import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Components
import Layout from '../layout'

//Lib
import { pagesArray } from '../../lib/constants/pages'
import { guid } from '../../lib/functions/guid'

class Router extends Component {
  
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Layout>
            <Switch>
              {pagesArray.map(x => {
                return (
                  <Route key={guid()} path={x.path} exact={x.exact} component={x.component}/>
                )
              })}
            </Switch>
          </Layout>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default Router