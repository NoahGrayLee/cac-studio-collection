import React, { Fragment } from 'react';

// 1. Dependencies
// 2. i18n
// 3. Components
import LeftNav from '../LeftNav';
import RightNav from '../RightNav';
// 4. for style
import styled from 'styled-components';
 
// 5. CSS
// 6. Resource Components
// 7. Static Resources


//-----*-----*-----*-----*-----*-----//

const Layout = ({ children }) => {
    return (
        <StyledLayout>
            <Fragment>
                <LeftNav />
                <ChildrenContainer>
                    {children}
                </ChildrenContainer>
                <RightNav />
            </Fragment>
        </StyledLayout>
    )
}


const StyledLayout = styled.div`

`
const ChildrenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #f0f0f0;
`

export default Layout
