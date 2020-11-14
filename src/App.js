import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Home from './components/pages/Home'
import CategoryPage from './components/category/CategoryPage'
import SingleItem from './components/item/SingleItem'
import PostAd from './components/ads/PostAd'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/category/:cat_name' component={CategoryPage} />
          <Route exact path='/item/:id' component={SingleItem} />
          <Route exact path='/post-ad' component={PostAd} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
