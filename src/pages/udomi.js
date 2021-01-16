import React from "react"
import Layout from "../components/Layout/Layout"
import Pets from "../components/Pets/Pets"
import Adopt from "../components/Adopt/Adopt"
 

const UdomiMePage = ({location}) => {
    if(location.state.num === 0){
      return(
        <Layout refresh="true">
          <Adopt></Adopt>
        </Layout>
      )
    }
    if(location.state.num === 1){
      return(
        <Layout refresh="true">
          Udomi_Me
          <Pets speciesProps="cat" inputProps="Type to search cats..." headerProps="Cate"></Pets>
        </Layout>
      )
    }
    if(location.state.num === 2){
      return(
        <Layout refresh="true">
          Udomi_Me
          <Pets speciesProps="dog" inputProps="Type to search dogs..." headerProps="Dogo"></Pets>
        </Layout>
      )
    }
    if(location.state.num === 3){
      return(
        <Layout refresh="true">
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