import React, { Component } from 'react';

// 1. Dependencies
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Carousel from 'nuka-carousel';

// 2. i18n
// 3. Components
// 4. for style
import styled from 'styled-components';
 
// 5. CSS
// 6. Resource Components
// 7. Static Resources


//-----*-----*-----*-----*-----*-----//

class Home extends Component  {
    state={
        autoplay: true,
        autoplayInterval: 1500,
        withoutControls: false,
        transitionMode: "fade",
        speed: 1000,
        disableKeyboardControls: true,
        wrapAround: true,
        pauseOnHover: false
    }
    render() {
        return (
            <StyledHome className="FRC">
            <Helmet>
                <title>CAC Collection Home</title>
            </Helmet>
            <div className="fixed-title">cac studio collection </div>
            <Carousel 
                className="carousel"
                autoplay={this.state.autoplay}
                autoplayInterval={this.state.autoplayInterval}
                withoutControls={this.state.withoutControls}
                transitionMode={this.state.transitionMode}
                speed={this.state.speed}
                disableKeyboardControls={this.state.disableKeyboardControls}
                wrapAround={this.state.wrapAround}
                pauseOnHover={this.state.pauseOnHover}
            >
                <div className="FRC carousel-item green">1</div>
                <div className="FRC carousel-item">2</div>
                <div className="FRC carousel-item green">3</div>
                <div className="FRC carousel-item">4</div>
                <div className="FRC carousel-item green">5</div>
            </Carousel>
            </StyledHome>
        )
    }
}
const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 100px;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
    & .fixed-title {
        position: absolute;
        z-index: 999;
        top: 45%;
    }
    & .carousel {
        width: 100vw;
        height: 100vh;
        & button {
            color: white!important;
        }
        & button[aria-label="next"] {
            display: none;
        }
        & button[aria-label="previous"] {
            display: none;
        }
        & .carousel-item {
            width: 100vw;
            height: 100vh;
            &.green {
                background-color: green;
            }            
        }
    }
`

export default Home
