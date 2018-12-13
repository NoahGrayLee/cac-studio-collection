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
  <StyledLeftNav>
      LeftNavigation
  </StyledLeftNav>
)

// class LeftNav extends Component {
//     render() {
//         return (
//             <StyledLeftNav>
//                
//             </StyledLeftNav>
//         )
//     }
// }


const StyledLeftNav = styled.div`

`

export default LeftNav
