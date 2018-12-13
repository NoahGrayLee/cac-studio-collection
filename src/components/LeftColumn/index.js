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

const LeftColumn = (props) => (
  <StyledLeftColumn className="FCT">
    {props.pageName}
    <div className="photo-area FRC">
        <div className="photo FRC">Photo</div>
    </div>
    <div className="contents-list">
        <div className="list-row FRC">
            List Row 
        </div>
        <div className="list-row FRC">
            List Row 
        </div>
        <div className="list-row FRC">
            List Row 
        </div>
    </div>
  </StyledLeftColumn>
)

// class LeftColumn extends Component {
//     render() {
//         return (
//             <StyledLeftColumn>
//                
//             </StyledLeftColumn>
//         )
//     }
// }

const StyledLeftColumn = styled.div`
    width: 50%;
    height: 100vh;
    border: 1px solid green;
    & .photo-area {
        flex: 0.7;
        & .photo {
            width: 400px;
            height: 400px;
            background-color: #ccc;
        }
    }
    & .contents-list {
        flex: 0.3;
        width: 100%;
        padding: 0 10%;
        & .list-row {
            height: 60px;
            border-bottom: 3px solid white;
            color: White;
            font-size: 26px;
            font-weight: 400;
        }
    }
`

export default LeftColumn
