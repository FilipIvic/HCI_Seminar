import React from "react"
import Layout from "../components/Layout/Layout"
import Pets from "../components/Pets/Pets"
import Adopt from "../components/Adopt/Adopt"
 

const UdomiMePage = ({location}) => {
    if(location.state.num === 0){
      return(
        <Layout refresh="true"
          logo="Veterinarska Stanica Ivić"
          buttonText="Hitna Pomoć!">
          <Adopt heading="Sve Životinje"
            buttonText="Odaberi mene!!"
            nameText="Bok! Ja sam"
            placeholder="Pretraži sve životinje..."
            type="text"
            path="/"
            pathSelector="/Pet_Button_:id">
          </Adopt>
        </Layout>
      )
    }
    if(location.state.num === 1){
      return(
        <Layout refresh="true"
          logo="Veterinarska Stanica Ivić"
          buttonText="Hitna Pomoć!">
          <Pets speciesProps="cat"
            inputProps="Pretraži mačake..."
            headerProps="Mace"
            buttonText="Meow, Udomi Me!">
          </Pets>
        </Layout>
      )
    }
    if(location.state.num === 2){
      return(
        <Layout refresh="true"
          logo="Veterinarska Stanica Ivić"
          buttonText="Hitna Pomoć!">
          <Pets speciesProps="dog" 
           inputProps="Pretraži pse..." 
           headerProps="Paseki"
           buttonText="Woof, Udomi Me!">
          </Pets>
        </Layout>
      )
    }
    if(location.state.num === 3){
      return(
        <Layout refresh="true"
          logo="Veterinarska Stanica Ivić"
          buttonText="Hitna Pomoć!">
          <Pets speciesProps="birb" 
           inputProps="Pretraži ptice..."
           headerProps="Ptičice"
           buttonText="Brrrb, Udomi Me!">
          </Pets>
        </Layout>
      )
    }
    else{
      return null;
    }
}

 
export default UdomiMePage