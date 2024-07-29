import React from 'react';
// import Fade from 'react-fade';
// import Button from '../../button/index'
import styled from '@emotion/styled';
import HeroVideo from "./heroVideo.mp4"

function Hero() {
  return (
    <Whole>
      <VideoContainer muted autoPlay loop>
        <source src={HeroVideo} type="video/mp4" />
      </VideoContainer>

      <ConatainerForAllText>
        <ContainerForHeading>
          <h1>The platform to manage our office</h1>
        </ContainerForHeading>
        <div>
          <ContainerForParagraph>
            <p>Transform your digital landscape with our comprehensive expertise in mobile and web development. From concept to launch, we specialize in crafting innovative solutions that captivate audiences and drive results. Partner with us to elevate your online presence and stay ahead in today's dynamic digital world.</p>
          </ContainerForParagraph>
          {/* <Button type="button" children="Get Connected" /> */}
        </div>
      </ConatainerForAllText>
    </Whole>
  )
}

const VideoContainer = styled.video`
// height: 110%;
width: 100%;
`

const Whole= styled.div`
// height: 100%;
width: 100%;
`
const ContainerForHeading = styled.div`
font-size: 25px;
`
const ContainerForParagraph = styled.div`
font-size: 20px;
`
const ConatainerForAllText = styled.div`
position: absolute;
left: 32px;
top: 20%;
right: 35%;
`

export default Hero

