import React from 'react'
import styled from 'styled-components'
import {GiHummingbird, GiHospitalCross} from 'react-icons/gi'
import {MdError} from 'react-icons/md'
import {FaCat,FaDog} from 'react-icons/fa'

const Icons = ({icon, color, size}) => {
    if(icon === "cross" )
        return (<GiHospitalCrossIcon aliasColor = {color} aliasSize = {size}></GiHospitalCrossIcon>)
    if(icon === "birb" )
        return (<GiHummingbirdIcon aliasColor = {color} aliasSize = {size}></GiHummingbirdIcon>)
    if(icon === "cat" )
        return (<FaCatIcon aliasColor = {color} aliasSize = {size}></FaCatIcon>)
    if(icon === "dog" )
        return (<FaDogIcon aliasColor = {color} aliasSize = {size}></FaDogIcon>)
    else
        return (<MdErrorIcon></MdErrorIcon>)
}
   
  export default Icons

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

const GiHospitalCrossIcon = styled(GiHospitalCross)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`

const MdErrorIcon = styled(MdError)`
    color: ${({ aliasColor }) => (aliasColor ? aliasColor : 'black')};
    font-size: ${({ aliasSize }) => (aliasSize ? aliasSize : '3rem')};
`