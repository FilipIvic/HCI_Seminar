import React from 'react'
import Layout from '../components/Layout/Layout'
import Background from '../components/Background/Background'
import Emergency from '../components/Emergency/Emergency'
import Services from '../components/Services/Services'
import Zoom from 'react-reveal/Zoom'

const IndexPage = () => (
  <Layout navigationStyle="transparent"
    dropdownStyle="transparentDropdown"
    logo="Veterinarska Stanica Ivić"
    buttonText="Hitna Pomoć!">
    <Background></Background>
    <Zoom>
      <div id = "anchor">Pomoć</div>
      <Emergency></Emergency>
    </Zoom>
    <Zoom>
      <Services></Services>
    </Zoom>
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
