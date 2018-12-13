import React, { Component } from 'react';

// 1. Dependencies
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// 2. i18n
// 3. Components
// 4. for style
import styled from 'styled-components'
 
// 5. CSS
// 6. Resource Components
// 7. Static Resources


//-----*-----*-----*-----*-----*-----//

const LeftNav = () => (
  <StyledLeftNav className="FCC">
      <Link to="/">
        <div className="FCC main-nav home-btn">
            H
        </div>
      </Link>
      <Link to="/collection">
        <div className="FCC main-nav goto-collection">
            C
        </div>
      </Link>
      <Link to="/brand">
        <div className="FCC main-nav goto-brand">
            B
        </div>
      </Link>
  </StyledLeftNav>
)

const StyledLeftNav = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    width: 48px;
    height: 100vh;
    border-right: 1px solid pink;
    & .main-nav {
        height: 30vh;
    }
`

export default LeftNav
