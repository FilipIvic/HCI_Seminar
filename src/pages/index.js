import React from 'react'
import Layout from '../components/Layout/Layout'
import Background from '../components/Background/Background'
import Emergency from '../components/Emergency/Emergency'
import Services from '../components/Services/Services'
import Service from '../components/Service/Service'
import Zoom from 'react-reveal/Zoom'

const IndexPage = () => (
  <Layout navigationStyle="transparent"
    dropdownStyle="transparentDropdown"
    logo="Veterinarska Stanica Ivić"
    buttonText="Hitna Pomoć!">
    <Background></Background>
    <Zoom>
      <div id = "anchor"></div>
      <Emergency></Emergency>
    </Zoom>
    <Services></Services>
    <div id = "usluga1"></div>
    <Service></Service>
    <div id = "usluga2"></div>
    <Service></Service>
    <div id = "usluga3">Usluga3</div>
    <Service></Service>
    <div id = "usluga4"></div>
    <Service></Service>
    <div id = "kontakt">Kontakt</div>
  </Layout>
)

export default IndexPage
