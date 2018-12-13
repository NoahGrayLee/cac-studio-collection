import React, { Component } from 'react';

// 1. Dependencies
import { BrowserRouter as Router, Route } from 'react-router-dom'

// 2. i18n
// 3. Components
import Layout from './components/Layout'

// 4. for style
import styled from 'styled-components'

// 5. CSS
import './App.scss';

// 6. Resource Components
// 7. Static Resources
// 8. Pages
import Home from './pages/Home'
import Collection from './pages/Collection'
import Brand from './pages/Brand'

//-----*-----*-----*-----*-----*-----//

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/collection' component={Collection} />
          <Route path='/brand' component={Brand} />
        </Layout>
      </Router>
    );
  }
}

export default App;
