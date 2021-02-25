import React from 'react'
import Layout from '../components/Layout/Layout'
import Background from '../components/Background/Background'
import Price from '../components/Price/Price'
import Zoom from 'react-reveal/Zoom';
import ReactPlayer from 'react-player'

const IndexPage = () => (
  <Layout navigationStyle="transparent"
    dropdownStyle="transparentDropdown"
    logo="Veterinarska Stanica Ivić"
    buttonText="Hitna Pomoć!">
    <Background></Background>
    <Price></Price>
    <Zoom>
      <p>Markup that will be revealed on scroll</p>
    </Zoom>
    <Zoom>
      <div>First Child</div>
      <div>Second Child</div>
    </Zoom>
    <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=NPbbLM7TFCk"
          />
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div id = "anchor">Pomoć</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div>Index</div>
    <div id = "kontakt">Kontakt</div>
  </Layout>
)

export default IndexPage
