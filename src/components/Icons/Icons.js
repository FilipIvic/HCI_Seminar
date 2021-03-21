import React from 'react'
import styled from 'styled-components'
import {GiHummingbird, GiHospitalCross} from 'react-icons/gi'
import {MdError, MdPets} from 'react-icons/md'
import {FaCat,FaDog, FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineBookOpen} from 'react-icons/hi'

const Icons = ({icon, color, size}) => {
    if(icon === "cross" )
        return (<GiHospitalCrossIcon aliasColor = {color} aliasSize = {size}></GiHospitalCrossIcon>)
    if(icon === "birb" )
        return (<GiHummingbirdIcon aliasColor = {color} aliasSize = {size}></GiHummingbirdIcon>)
    if(icon === "cat" )
        return (<FaCatIcon aliasColor = {color} aliasSize = {size}></FaCatIcon>)
    if(icon === "dog" )
        return (<FaDogIcon aliasColor = {color} aliasSize = {size}></FaDogIcon>)
    if(icon === "menu" )
        return (<FabarsIcon aliasColor = {color} aliasSize = {size}></FabarsIcon>)
    if(icon === "pets" )
        return (<MdPetsIcon aliasColor = {color} aliasSize = {size}></MdPetsIcon>)
    if(icon === "search" )
        return (<AiOutlineSearchIcon aliasColor = {color} aliasSize = {size}></AiOutlineSearchIcon>)
    if(icon === "blog" )
        return (<HiOutlineBookOpenIcon aliasColor = {color} aliasSize = {size}></HiOutlineBookOpenIcon>)
    else
        return (<MdErrorIcon></MdErrorIcon>)
}
   
  export default Icons

const GiHospitalCrossIcon = styled(GiHospitalCross)`
  color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
  font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`  
const GiHummingbirdIcon = styled(GiHummingbird)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')}; 
`

const FaCatIcon = styled(FaCat)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`

const FaDogIcon = styled(FaDog)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`
const FabarsIcon = styled(FaBars)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`
const MdPetsIcon = styled(MdPets)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`
const AiOutlineSearchIcon = styled(AiOutlineSearch)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`

const HiOutlineBookOpenIcon = styled(HiOutlineBookOpen)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`

const MdErrorIcon = styled(MdError)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`