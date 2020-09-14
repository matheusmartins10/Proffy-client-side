import React from 'react'
import { BrowserRouter, Switch} from 'react-router-dom'

import Route from './Route'

import SignIn from '../Pages/SignIn/index'


const Router: React.FC = () => {
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={SignIn}/>
          </Switch>
        </BrowserRouter>
    )
}

export default Router