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

const BrandRightColumn = () => (
  <StyledBrandRightColumn>
      Brand Right Column
  </StyledBrandRightColumn>
)

// class BrandRightColumn extends Component {
//     render() {
//         return (
//             <StyledBrandRightColumn>
//                
//             </StyledBrandRightColumn>
//         )
//     }
// }


const StyledBrandRightColumn = styled.div`

`

export default BrandRightColumn
