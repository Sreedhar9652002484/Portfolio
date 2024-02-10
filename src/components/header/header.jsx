import css from '../header/header.css'
import profile from '../../assests/Sree.jpg'
import { useReducer, useState } from 'react'
import { Home } from '../Home/home'
import { About } from '../About/about'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

const intialState={
    click1:true,
    click2:false,
    click3:false,
    click4:false,
    click5:false
}
const reducer=(state, action)=>{
    switch (action.type) {
        case "click1":
            return {...intialState, click1:true, click2:false, click3:false}
            break;
        case "click2":
            return {...intialState, click2:true, click1:false}
            break;
        case "click3":
            return {...intialState, click3:true, click1:false}
            break;
        case "click4":
            return {...intialState, click4:true, click1:false}  
            break;
        case "click5":
            return {...intialState, click5:true, click1:false}  
            break;    
        default:
            return state
            break;
    }
    
}

export const Header=({home, about, resume, portfolio, contact})=>{

    
    
    const[clicked, dispatch]=useReducer(reducer, intialState);
    const handleHome=()=>{
        home(clicked.click1);
    }
    const handleAbout=()=>{
        about(clicked.click2);
    }
    const handleResume=()=>{
        resume(clicked.click3)
    }
    const handlePortfolio=()=>{
        portfolio(clicked.click4)
    }
    const handleContact=()=>{
        contact(clicked.click5)
    }
    return(
        <div className='header1'>
            <div className="img">
                <img src={profile} id='image'></img>
            </div>
            <div className="content">
                <div className='home' onClick={()=> {dispatch({type:'click1'}); handleHome()}}style={clicked.click1 ?{color:'#ff2d03'}:{}}><div className='texticon'><HomeOutlinedIcon ></HomeOutlinedIcon><p > HOME</p></div></div>
                <div className='home' onClick={()=>{dispatch({type:'click2'}); handleAbout()}} style={clicked.click2? {color:'#ff2d03'}:{}}><div className='texticon'><Person2OutlinedIcon ></Person2OutlinedIcon><p >ABOUT</p></div></div>
                <div className='home' onClick={()=>{dispatch({type:'click3'}); handleResume()}} style={clicked.click3?  {color:'#ff2d03'}:{}}><div className='texticon' ><InsertDriveFileOutlinedIcon ></InsertDriveFileOutlinedIcon><p >  RESUME</p></div></div>
                <div className='home' onClick={()=>{dispatch({type:'click4'});handlePortfolio()}} style={clicked.click4?  {color:'#ff2d03'}:{}}><div className='texticon'><BusinessCenterOutlinedIcon></BusinessCenterOutlinedIcon><p > PORTFOLIO</p></div></div>
                <div className='home' onClick={()=>{dispatch({type:'click5'});handleContact()}}style={clicked.click5? {color:'#ff2d03'}:{}}><div className='texticon'><MarkEmailReadOutlinedIcon ></MarkEmailReadOutlinedIcon><p >CONTACT</p></div></div>
            </div>
        </div>
    )
}