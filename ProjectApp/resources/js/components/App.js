
  import React, { Component } from 'react'
  import ReactDOM from 'react-dom'
  import { BrowserRouter, Route, Switch } from 'react-router-dom'
  import Header from './Header'
  import ContentApp from './Content'

  class App extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
                <Route exact  path='/react' component={ContentApp}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'))
