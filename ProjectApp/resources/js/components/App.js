
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter, Route, Switch } from 'react-router-dom';
  import Header from './compo/Header';
  import ContentApp from './compo/Content';

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
