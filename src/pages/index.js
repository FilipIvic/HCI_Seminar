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
      <Emergency></Emergency>
    </Zoom>
    <Services></Services>
    <Service></Service>
    <div id = "kontakt"></div>
  </Layout>
)

export default IndexPage
