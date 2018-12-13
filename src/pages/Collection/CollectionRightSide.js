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

const CollectionRightSide = () => (
  <StyledCollectionRightSide className="">
      Collection Right Side
      <div className="scroll-area">
        Product List
      </div>
  </StyledCollectionRightSide>
)

// class CollectionRightSide extends Component {
//     render() {
//         return (
//             <StyledCollectionRightSide>
//                
//             </StyledCollectionRightSide>
//         )
//     }
// }


const StyledCollectionRightSide = styled.div`
    width: 50%;
    height: 100vh;
    border: 1px solid green;
    overflow: scroll;
    text-align: center;
    & .scroll-area {
        height: 1800px;
        width: 80%;
        margin-left: 10%;
        background-color: #ccc;
    }
`

export default CollectionRightSide
