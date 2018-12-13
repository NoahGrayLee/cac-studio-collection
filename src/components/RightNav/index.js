import React, { Component } from 'react';

// 1. Dependencies
import { Link } from 'react-router-dom'

// 2. i18n
// 3. Components
// 4. for style
import styled from 'styled-components'
 
// 5. CSS
// 6. Resource Components
// 7. Static Resources


//-----*-----*-----*-----*-----*-----//

const RightNav = () => (
  <StyledRightNav className="FCC">
    <a href="https://google.com" target="_blank">
        <div className="sns-btn facebook-link">
            F
        </div>
    </a>
    <a href="https://google.com" target="_blank">
        <div className="sns-btn twitter-link">
            T
        </div>
    </a>
    <a href="https://google.com" target="_blank">
        <div className="sns-btn pinterest-link">
            P
        </div>
    </a>
  </StyledRightNav>
)

const StyledRightNav = styled.div`
    position: fixed;
    z-index: 999;
    right: 0;
    width: 48px;
    height: 100vh;
    border-left: 1px solid pink;
`

export default RightNav
