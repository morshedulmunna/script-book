import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Error404 from './Component/Error404/Error404';
import BlogDetails from './Component/BlogDetails/BlogDetails';
import Header from './Component/Header/Header';


function App() {
  return (
      <Router>
        <Header>
        </Header>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
{/* Changeable Routing Here */}

          <Route path="/blog-details/:id">
              <BlogDetails/>    
          </Route>

{/* Changeable Routing Here ====End====*/}
          <Route path="*">
            <Error404/>
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
