import React from "react"
import Layout from "../components/Layout/Layout"
import Pets from "../components/Pets/Pets"
 
const UdomiMePage = ({location}) => {
    if(location.state.num === 0){
      return(
        <Layout>
          Udomi_Me
          <Pets speciesProps="cat" inputProps="Type to search cats..." headerProps="Cats"></Pets>
          <Pets speciesProps="dog" inputProps="Type to search dogs..." headerProps="Dogs"></Pets>
          <Pets speciesProps="birb" inputProps="Type to search birbs..." headerProps="Birbs"></Pets>
        </Layout>
      )
    }
    if(location.state.num === 1){
      return(
        <Layout>
          Udomi_Me
          <Pets speciesProps="cat" inputProps="Type to search cats..." headerProps="Cats"></Pets>
        </Layout>
      )
    }
    if(location.state.num === 2){
      return(
        <Layout>
          Udomi_Me
          <Pets speciesProps="dog" inputProps="Type to search dogs..." headerProps="Dogs"></Pets>
        </Layout>
      )
    }
    if(location.state.num === 3){
      return(
        <Layout>
          Udomi_Me
          <Pets speciesProps="birb" inputProps="Type to search birbs..." headerProps="Birbs"></Pets>
        </Layout>
      )
    }
    else{
      return null;
    }
}

 
export default UdomiMePage