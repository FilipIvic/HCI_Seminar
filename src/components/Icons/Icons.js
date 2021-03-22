import React from 'react'
import styled from 'styled-components'
import {GiHummingbird, GiHospitalCross} from 'react-icons/gi'
import {MdError, MdPets} from 'react-icons/md'
import {FaCat,FaDog, FaBars} from 'react-icons/fa'
import {AiOutlineSearch, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {RiSyringeLine} from 'react-icons/ri'
import {FiScissors} from 'react-icons/fi'
import {BiChip} from 'react-icons/bi'

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
    if(icon === "syringe" )
        return (<RiSyringeLineIcon aliasColor = {color} aliasSize = {size}></RiSyringeLineIcon>)
    if(icon === "scissors" )
        return (<FiScissorsIcon aliasColor = {color} aliasSize = {size}></FiScissorsIcon>)
    if(icon === "rendgen" )
        return (<AiOutlineFundProjectionScreenIcon aliasColor = {color} aliasSize = {size}></AiOutlineFundProjectionScreenIcon>)
    if(icon === "chip" )
        return (<BiChipIcon aliasColor = {color} aliasSize = {size}></BiChipIcon>)
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
const RiSyringeLineIcon = styled(RiSyringeLine)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`

const FiScissorsIcon = styled(FiScissors)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`

const AiOutlineFundProjectionScreenIcon = styled(AiOutlineFundProjectionScreen)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`

const BiChipIcon = styled(BiChip)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`

const MdErrorIcon = styled(MdError)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`