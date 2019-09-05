import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header'
import Posts from './components/pages/Posts'
import Post from './components/pages/Post'
import EditPost from './components/pages/EditPost'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Posts}/>
          <Route exact path="/posts/edit/:id" component={EditPost} />
          <Route exact path="/posts/:id" component={Post} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
