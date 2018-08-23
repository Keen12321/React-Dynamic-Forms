import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/App.css'
import store from '../store'
import {Provider} from 'react-redux'

import Home from './Home'
import PostAlbum from './PostAlbum'
import PostPhoto from './PostPhoto'
import SingleAlbum from './SingleAlbum'
import SinglePhoto from './SinglePhoto'

class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div className="mainContainer">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/album/:id" component={SingleAlbum} />
              <Route path="/photo/:id" component={SinglePhoto} />
              <Route path="/postAlbum" component={PostAlbum} />
              <Route path="/postPhoto" component={PostPhoto} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
