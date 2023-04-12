import react from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {AiFillWallet} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';


import logo from './assets/logo.png';

function Navbar(){
    const [showText, setShowText] = useState('');
    const onClick = () => setShowText(!showText);
    const [showText2, setShowText2] = useState('');
    const onClick2 = () => setShowText2(!showText2);
    return(
        <>
            {showText2 ? 
                <div class="front-nav-menu-search-div">
                    <div class="front-nav-resp-search">
                        <input type="text" placeholder="search items, collection and creators"></input>
                        <AiOutlineSearch style={{position:'absolute',right:'1.5rem',top:'1.5rem',fontSize:'20px'}}/>
                    </div>
                    <RxCross1 onClick={onClick2} style={{cursor:'pointer',position:'absolute',top:'1.5rem',right:'1rem',fontSize:'20px',color:'#5138EE'}}/>
                </div>
            : null}

            <div class="front-nav">
                <div class='front-nav-container'>
                <Link to="/" style={{textDecoration: 'none'}}><div class="front-nav-logo"><img src={logo}></img></div></Link>
                    <div class="front-nav-search">
                        <input type="text" placeholder="search items, collections"></input>
                        <AiOutlineSearch onClick={onClick2} style={{cursor:'pointer',position:'absolute',right:'0.5rem',top:'0.5rem',fontSize:'20px'}}/>
                    
                    </div>
                    {/* <BiSearchAlt /> */}
                    
                    <div class="front-nav-items">
                    <Link to="/explore" style={{textDecoration: 'none'}}><span class="front-nav-item1">Explore<AiOutlineDown style={{fontSize:'14px',position:'absolute',top:'0.5rem',right:'0'}}/></span></Link>
                    <Link to="/" style={{textDecoration: 'none'}}><span class="front-nav-item1">Home<AiOutlineDown style={{fontSize:'14px',position:'absolute',top:'0.5rem',right:'0'}}/></span></Link>
                    <span class="front-nav-item1">Activity<AiOutlineDown style={{fontSize:'14px',position:'absolute',top:'0.5rem',right:'0'}}/></span>
                    
                </div>
                <div class="front-nav-user">
                    <Link to="/author" style={{textDecoration: 'none'}}>
                        <div class="front-nav-user1">
                        <AiOutlineUser style={{color:'white',backgroundColor:'#5138EE',borderRadius:'50%',fontSize:'25px'}}/>
                        <div class='front-nav-user-txt'>ALex Joe</div>
                        </div>
                    </Link>
                    <div class="front-nav-user1">
                        <AiFillWallet style={{color:'#5138EE',fontSize:'25px',padding:'0.1rem',borderRadius:'50%',}}/>
                    <div class='front-nav-user-txt'>234.98ETH</div>
                    </div>
                </div>
                <div onClick={onClick} class="front-nav-menu">
                    {showText? <RxCross1 style={{cursor:'pointer',fontSize:'30px',color:'#5138EE'}}/>
                    : <AiOutlineMenu style={{cursor:'pointer',fontSize:'30px'}}/>}
                </div>
                </div>
                
            </div>
            {showText ? <Text /> : null}
        </>
    )
};
function Text(){
    return(
        <>
<div class="front-nav-menu-div">
    <div class="front-resp-nav-items ">
        <Link to="/explore" style={{textDecoration: 'none'}}>
            <span class="front-resp-nav-item1">Explore<AiOutlineDown style={{fontSize:'14px',position:'absolute',top:'0.5rem',right:'0'}}/></span>
        </Link>
        <span class="front-resp-nav-item1">Home<AiOutlineDown style={{fontSize:'14px',position:'absolute',top:'0.5rem',right:'0'}}/></span>
        <span class="front-resp-nav-item1">Activity<AiOutlineDown style={{fontSize:'14px',position:'absolute',top:'0.5rem',right:'0'}}/></span>
    </div>
</div>
        </>
    )
 };
 function Text2(){
    return(

        <>

        </>
    )
 };
export default Navbar