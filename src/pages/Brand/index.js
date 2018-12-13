import React, { Component } from 'react';

// 1. Dependencies
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// 2. i18n
// 3. Components
import LeftColumn from '../../components/LeftColumn';
import BrandRightColumn from './BrandRightColumn';

// 4. for style
import styled from 'styled-components'
 
// 5. CSS
// 6. Resource Components
// 7. Static Resources


//-----*-----*-----*-----*-----*-----//

const Brand = () => (
  <StyledBrand className="FRSB">
    <Helmet>
        <title>CAC Collection Brand</title>
    </Helmet>
    <LeftColumn pageName="Brand left column" />
    <BrandRightColumn />
  </StyledBrand>
)

// class Brand extends Component {
//     render() {
//         return (
//             <StyledBrand>
//                
//             </StyledBrand>
//         )
//     }
// }


const StyledBrand = styled.div`
  width: 100%;
  height 100vh;
  padding: 0 48px;
`

export default Brand
