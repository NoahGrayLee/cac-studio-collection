import React, { Component } from 'react';

// 1. Dependencies
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// 2. i18n
// 3. Components
import LeftColumn from '../../components/LeftColumn';
import CollectionRightSide from './CollectionRightSide';

// 4. for style
import styled from 'styled-components'
 
// 5. CSS
// 6. Resource Components
// 7. Static Resources


//-----*-----*-----*-----*-----*-----//

const Collection = () => (
  <StyledCollection className="FRSB">
    <Helmet>
        <title>CAC Collection</title>
    </Helmet>
    <LeftColumn pageName="Collection left column" />
    <CollectionRightSide />
  </StyledCollection>
)

// class Collection extends Component {
//     render() {
//         return (
//             <StyledCollection>
//                
//             </StyledCollection>
//         )
//     }
// }

const StyledCollection = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 48px;
`

export default Collection
