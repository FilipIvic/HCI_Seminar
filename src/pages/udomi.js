import React from "react"
import Layout from "../components/Layout/Layout"
import Pets from "../components/Pets/Pets"
 
const UdomiMePage = () => (
  <Layout>
    Udomi_Me
    <Pets speciesProps="cat" inputProps="Type to search cats..." headerProps="Cats"></Pets>
    <Pets speciesProps="dog" inputProps="Type to search dogs..." headerProps="Dogs"></Pets>
    <Pets speciesProps="birb" inputProps="Type to search birbs..." headerProps="Birbs"></Pets>
  </Layout>
)
 
export default UdomiMePage