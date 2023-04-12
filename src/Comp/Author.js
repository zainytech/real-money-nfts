import react from 'react';
import './Author.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { useState } from 'react';
import BuyNow from './BuyNow'
import Create from './Create'
import { Link } from 'react-router-dom';

import Exabout from './authorNav1/Exabout';
import Exactivity from './authorNav1/Exactivity';
import Exfollower from './authorNav1/Exfollower';
import Exfollowing from './authorNav1/Exfollowing';
import Exmeta from './authorNav1/Exmeta';


import exploreheadbanner from './assets/Explore/explore-head-banner.jpg'
import profilecover from './assets/Author/profile-cover.jpg'
import profileimg from './assets/Author/profile-img.jpg'

import sellericon1 from './assets/seller-icon1.png';
import sellericon2 from './assets/seller-icon2.png';
import seller1icon1 from './assets/seller1-icon1.png';
import seller1icon2 from './assets/seller1-icon2.gif';
import seller1icon3 from './assets/seller1-icon3.png';
import seller2icon1 from './assets/seller2-icon1.gif';
import seller4icon1 from './assets/seller4-icon1.png';
import seller4icon2 from './assets/seller4-icon2.gif';
import seller4icon3 from './assets/seller4-icon3.gif';
import seller5icon1 from './assets/seller5-icon1.png';
import slider2banner1 from './assets/slider2-banner1.jpg';
import slider2banner2 from './assets/slider2-banner2.gif';
import slider2banner3 from './assets/slider2-banner3.jpg';
import slider2banner4 from './assets/slider2-banner4.gif';
import slider2banner5 from './assets/slider2-banner5.gif';
import slider2banner6 from './assets/slider2-banner6.jpg';
import slider2banner7 from './assets/slider2-banner7.gif';
import slider2banner8 from './assets/slider2-banner8.jpg';
import slider2banner9 from './assets/slider2-banner9.jpg';
import slider2banner10 from './assets/slider2-banner10.jpg';

import {AiFillCamera} from 'react-icons/ai';
import {RiFileCopy2Fill} from 'react-icons/ri';
import {RiFlaskFill} from 'react-icons/ri';
import {IoIosFlash} from 'react-icons/io';
import {TbLicense} from 'react-icons/tb';
import {BsFillPuzzleFill} from 'react-icons/bs';
import {BiLibrary} from 'react-icons/bi';

import {AiFillHeart} from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';


function Author(){

    const [showtextauthorallnfts, setShowtextauthorallnfts] = useState(true);
    const onClickauthorallnfts = ()=>{
        setShowtextauthorallnfts(true);
        setShowtextauthorexabout(false);
        setShowtextauthorexactivity(false);
        setShowtextauthorexfollower(false);
        setShowtextauthorexfollowing(false);
        setShowtextauthorexmeta(false);

    };
    const [showtextauthorexabout, setShowtextauthorexabout] = useState('');
    const onClickauthorexabout = ()=>{
        setShowtextauthorexabout(true);
        setShowtextauthorallnfts(false);
        setShowtextauthorexactivity(false);
        setShowtextauthorexfollower(false);
        setShowtextauthorexfollowing(false);
        setShowtextauthorexmeta(false);

    };
    const [showtextauthorexactivity, setShowtextauthorexactivity] = useState('');
    const onClickauthorexactivity = ()=>{
        setShowtextauthorexactivity(true);
        setShowtextauthorallnfts(false);
        setShowtextauthorexabout(false);
        setShowtextauthorexfollower(false);
        setShowtextauthorexfollowing(false);
        setShowtextauthorexmeta(false);


    };
    const [showtextauthorexfollower, setShowtextauthorexfollower] = useState('');
    const onClickauthorexfollower = ()=>{
        setShowtextauthorexfollower(true);
        setShowtextauthorallnfts(false);
        setShowtextauthorexabout(false);
        setShowtextauthorexactivity(false);
        setShowtextauthorexfollowing(false);
        setShowtextauthorexmeta(false);

    };
    const [showtextauthorexfollowing, setShowtextauthorexfollowing] = useState('');
    const onClickauthorexfollowing = ()=>{
        setShowtextauthorexfollowing(true);
        setShowtextauthorallnfts(false);
        setShowtextauthorexabout(false);
        setShowtextauthorexactivity(false);
        setShowtextauthorexfollower(false);
        setShowtextauthorexmeta(false);

    };
    const [showtextauthorexmeta, setShowtextauthorexmeta] = useState('');
    const onClickauthorexmeta = ()=>{
        setShowtextauthorexmeta(true);
        setShowtextauthorallnfts(false);
        setShowtextauthorexabout(false);
        setShowtextauthorexactivity(false);
        setShowtextauthorexfollower(false);
        setShowtextauthorexfollowing(false);

    };



    const [showtextauthorcnfts, setShowtextauthorcnfts] = useState('');
    const onClickauthorcnfts = ()=>{
        setShowtextauthorcnfts(true);
        setShowtextauthoronsale(false);
        setShowtextauthowned(false);
        setShowtextauthcreated(false);
        setShowtextauthcollection(false);

    };
    const [showtextauthoronsale, setShowtextauthoronsale] = useState(true);
    const onClickauthoronsale = ()=>{
        setShowtextauthoronsale(true);
        setShowtextauthorcnfts(false);
        setShowtextauthowned(false);
        setShowtextauthcreated(false);
        setShowtextauthcollection(false);

    };
    const [showtextauthorowned, setShowtextauthowned] = useState('');
    const onClickauthorowned = ()=>{
        setShowtextauthowned(true);
        setShowtextauthorcnfts(false);
        setShowtextauthoronsale(false);
        setShowtextauthcreated(false);
        setShowtextauthcollection(false);

    };
    const [showtextauthorcreated, setShowtextauthcreated] = useState('');
    const onClickauthorcreated = ()=>{
        setShowtextauthcreated(true);
        setShowtextauthorcnfts(false);
        setShowtextauthoronsale(false);
        setShowtextauthowned(false);
        setShowtextauthcollection(false);

    };
    const [showtextauthorcollection, setShowtextauthcollection] = useState('');
    const onClickauthorcollection = ()=>{
        setShowtextauthcollection(true);
        setShowtextauthorcnfts(false);
        setShowtextauthoronsale(false);
        setShowtextauthowned(false);
        setShowtextauthcreated(false);

    };
    return(
        <>
            <Navbar/>
            <div class="author-main">
                <div class="author-main-bg">
                    <img src={exploreheadbanner}></img>
                </div>

                <div class="author-main1-container">
                    <div class="author-main1">
                        <span class="author-main1-txt1">Author Profile</span>
                        <span class="author-main1-txt2 author-main1-txt2-bold">Home</span>
                        <span class="author-main1-txt2"> - </span>
                        <span class="author-main1-txt2">Alex Joe</span>
                    </div>
                </div>

                <div class="author-main2">
                    <div class="author-main2-container">
                        <div class="author-main2-div">
                            <div class="author-main2-div1">
                                <div class="author-main2-div1-img"><img src={profilecover}></img>
                                    <label class="custom-file-upload1">
                                        <input type="file"/>
                                        <AiFillCamera style={{paddingRight:'0.5rem'}}/>Edit Photo
                                    </label>
                                    </div>
                                    
                                <div class='author-main2-div2'>
                                    <div class="author-main2-div2-img"><img src={profileimg}></img></div>
                                    <label class="custom-file-upload2">
                                        <input type="file"/>
                                        <AiFillCamera /><span class="custom-file-upload2-txt" style={{paddingLeft:'0.5rem'}}>Edit</span>
                                    </label>
                                </div>
                                <div class="author-main2-div3">
                                    <div class="author-main2-div3a">
                                        <span class="author-main2-div3a-txt1">Alex joe</span>
                                        <span class="author-main2-div3a-txt2">@alexjoe.jxe</span>
                                    </div>
                                    <div class="author-main2-div3b">
                                    <div class="author-main2-div3b-txt">
                                    <span>0x731F9FBF4163D47B0F581DD9EC45C9</span>
                                    </div>
                                    <RiFileCopy2Fill style={{color:'white',backgroundColor:'#3C21EC',padding:'0.3rem',fontSize:'20x',borderRadius:'0.1rem'}}/>

                                    </div>
                                </div>
                               
                            </div>

                        </div>
                        <div class="author-main3">
                            <span onClick={onClickauthorallnfts} className={showtextauthorallnfts? 'author-main3-txt-onclick':'author-main3-txt'}>All NFT's</span>
                            <span onClick={onClickauthorexabout} className={showtextauthorexabout? 'author-main3-txt-onclick':'author-main3-txt'}>About</span>
                            <span onClick={onClickauthorexactivity} className={showtextauthorexactivity? 'author-main3-txt-onclick':'author-main3-txt'}>Activity</span>
                            <span onClick={onClickauthorexfollower} className={showtextauthorexfollower? 'author-main3-txt-onclick':'author-main3-txt'}>Follower</span>
                            <span onClick={onClickauthorexfollowing} className={showtextauthorexfollowing? 'author-main3-txt-onclick':'author-main3-txt'}>Following</span>
                            <span onClick={onClickauthorexmeta} className={showtextauthorexmeta? 'author-main3-txt-onclick':'author-main3-txt'}>My Wallet</span>
                            <span >Setting</span>

                        </div>
                    </div>
                </div>

<div class="author-main4">
    <div class="author-main4-container">

        <div class="author-main4a">
            {showtextauthorallnfts ?
            <>
                <div class="author-main4a-allnfts-div1">
                    <div onClick={onClickauthorcnfts} class="author-main4a-allnfts-div1a" className={showtextauthorcnfts? 'author-main4a-allnfts-div1a-onclick':'author-main4a-allnfts-div1a'}>
                        <RiFlaskFill style={{paddingRight:'0.5rem'}}/>Create NFT
                    </div>
                    <div onClick={onClickauthoronsale} class="author-main4a-allnfts-div1a" className={showtextauthoronsale? 'author-main4a-allnfts-div1a-onclick':'author-main4a-allnfts-div1a'}>
                        <IoIosFlash style={{paddingRight:'0.5rem'}}/>On Sale
                    </div>
                    <div onClick={onClickauthorowned} class="author-main4a-allnfts-div1a" className={showtextauthorowned? 'author-main4a-allnfts-div1a-onclick':'author-main4a-allnfts-div1a'}>
                        <TbLicense style={{paddingRight:'0.5rem'}}/>Owned
                    </div>
                    <div onClick={onClickauthorcreated} class="author-main4a-allnfts-div1a" className={showtextauthorcreated? 'author-main4a-allnfts-div1a-onclick':'author-main4a-allnfts-div1a'}>
                        <BsFillPuzzleFill style={{paddingRight:'0.5rem'}}/>Created
                    </div>
                    <div onClick={onClickauthorcollection} class="author-main4a-allnfts-div1a" className={showtextauthorcollection? 'author-main4a-allnfts-div1a-onclick':'author-main4a-allnfts-div1a'}>
                        <BiLibrary style={{paddingRight:'0.5rem'}}/>Collection
                    </div>
                    <div class="author-main4a-allnfts-div1b">
                    <select id="author-main4a-allnfts-div1a-select">
                        <option class="author-main4a-allnfts-div1a-option">All</option>
                        <option class="author-main4a-allnfts-div1a-option">Recent</option>
                        <option class="author-main4a-allnfts-div1a-option">Popular</option>
                        <option class="author-main4a-allnfts-div1a-option">Relevant</option>
                    </select>
                    </div>
                </div>
                <div class="author-main4a-allnfts-div2">

                </div>
            




{/* dropdown2/////// */}
            <div class="author-main4a-div1">

{/* create nfts//////////// */}
{showtextauthorcnfts ? <>
<Create/>
{/* 
<div class="author-main4a-cnfts">
                    <div class="author-main4a-cnfts-container">
                        <div class="author-main4a-cnfts-div1">
                            <span class="author-main4a-cnfts-div1-txt">PNG,JPG,JPEG,SVG,WEBP,Mp3 & Mp4 (Max-150mb)</span>
                            <label class="custom-file-upload1-cnfts">
                                <input type="file"/>
                                <FaUpload style={{paddingRight:'0.5rem'}}/>Upload a file
                            </label>
                        </div>
                        <div class="author-main4a-cnfts-div2">
                            <input type="text" placeholder="Item Name"></input>
                        </div>
                        <div class="author-main4a-cnfts-div3">
                            <textarea placeholder="Item Discription" rows="10"></textarea>
                        </div>
                        <div class="author-main4a-cnfts-div4">
                            <div class="author-main4a-cnfts-div4a">
                                Select Item Catergory
                            </div>
                            <div class="author-main4a-cnfts-div4b">
                                <div class="author-main4a-cnfts-div4b-a">
                                    <FaArtstation style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Art
                                </div>
                                <div class="author-main4a-cnfts-div4b-a">
                                    <GiCardRandom style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Trading Cards
                                </div>
                                <div class="author-main4a-cnfts-div4b-a">
                                    <IoGameController style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Gaming
                                </div>
                                <div class="author-main4a-cnfts-div4b-a">
                                    <SiApplemusic style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Music
                                </div>
                                <div class="author-main4a-cnfts-div4b-a">
                                    <AiOutlineTwitter style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Tweets
                                </div>
                                <div class="author-main4a-cnfts-div4b-a">
                                    <FaMoneyBillAlt style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Rare Item
                                </div>
                                <div class="author-main4a-cnfts-div4b-a">
                                    <FaBoxOpen style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Collectibles
                                </div>
                                <div class="author-main4a-cnfts-div4b-a">
                                    <AiFillGift style={{paddingRight:'0.5rem',fontSize:'16px'}}/>NFT Gifts
                                </div>
                            </div>
                        </div>
                        <div class="author-main4a-cnfts-div5">
                            <div class="author-main4a-cnfts-div5a">
                                <span class="author-main4a-cnfts-div5a-txt">Select Currency</span>
                                    <select id="author-main4a-allnfts-div1a-select">
                                        <option class="author-main4a-allnfts-div1a-option">Ethereum</option>
                                        <option class="author-main4a-allnfts-div1a-option">Bitcoin</option>
                                        <option class="author-main4a-allnfts-div1a-option">Dollar</option>
                                        <option class="author-main4a-allnfts-div1a-option">Pound</option>
                                    </select>
                            </div>
                            <div class="author-main4a-cnfts-div5b">
                                <input type="text" placeholder="Item Name"></input>
                            </div>
                            <div class="author-main4a-cnfts-div5c">
                                <input type="text" placeholder="Royalities"></input>
                            </div>
                            <div class="author-main4a-cnfts-div5c">
                                <input type="text" placeholder="Size"></input>
                            </div>
                            <div class="author-main4a-cnfts-div5c">
                                <input type="text" placeholder="Number Of Copies"></input>
                            </div>
                        </div>
                        <div class="author-main4a-cnfts-div6">
                            <button>Create Item</button>
                        </div>

                    </div>
                </div> */}
</>
:null }
{/* end of create nft's///////// */}

{/* on sale//////////// */}               
{showtextauthoronsale ? <>

<div class="author-main5a-cnfts">
    <div class="author-main4a-cnfts-container">

    <div class="front-main5-div1">
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner5}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>

                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller1icon3}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner6}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner1}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner7}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        

                        {/* <div class="front-main5-div1"> */}
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner10}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>

                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller1icon3}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner8}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner2}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner9}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        {/* </div> */}
                        </div>
                    

    </div>
</div>
</>
:null }
{/* end of on sale///////// */}


{/* owned//////////// */}               
{showtextauthorowned ? <>

<div class="author-main5a-cnfts">
    <div class="author-main4a-cnfts-container">

    <div class="front-main5-div1">

                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner1}></img>
                                    <div class="nft-buynow-hover-btn">
                                            <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner7}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        

                        {/* <div class="front-main5-div1"> */}
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner10}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>

                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller1icon3}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner8}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner2}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner9}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        {/* </div> */}
                        </div>
                    

    </div>
</div>
</>
:null }
{/* end of owned///////// */}

{/* created//////////// */}               
{showtextauthorcreated ? <>

<div class="author-main5a-cnfts">
    <div class="author-main4a-cnfts-container">

    <div class="front-main5-div1">


                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner7}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        

                        {/* <div class="front-main5-div1"> */}
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner10}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>

                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller1icon3}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner8}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner2}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner9}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        {/* </div> */}
                        </div>
                    

    </div>
</div>
</>
:null }
{/* end of created///////// */}

{/* collection//////////// */}               
{showtextauthorcollection ? <>

<div class="author-main5a-cnfts">
    <div class="author-main4a-cnfts-container">

    <div class="front-main5-div1">
                           
                        

                        {/* <div class="front-main5-div1"> */}
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner10}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>

                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller1icon3}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner8}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner2}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="main5-swiper2-div2">
                                    <img src={slider2banner9}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="swiper1-div3">
                                    <div class="swiper1-div3a">
                                        <span class="swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        {/* </div> */}
                        </div>
                    

    </div>
</div>
</>
:null }
{/* end of collection///////// */}


            </div>

            </>
            :null
            }
            {showtextauthorexabout ?
            <>
                <Exabout/>
            </>
            :null
            }
            {showtextauthorexactivity ?
            <>
                <Exactivity/>
            </>
            :null
            }
            {showtextauthorexfollower ?
            <>
                <Exfollower/>
            </>
            :null
            }
            {showtextauthorexfollowing ?
            <>
                <Exfollowing/>
            </>
            :null
            }
            {showtextauthorexmeta ?
            <>
                <Exmeta/>
            </>
            :null
            }

        </div>
        <div class="author-main4b">
            <div class="author-main4b-div1">
                <div class="author-main4b-div1-container">
                    <div class="author-main4b-div1a">
                        Search NFT
                    </div>
                    <div class="author-main4b-div1b">
                        Search from best Rarest NFT collections
                    </div>
                    <div class="author-main4b-div1c">
                        <input type="text" placeholder="Search NFT"></input>
                    </div>
                </div>
            </div>
            <div class="author-main4b-div1 author-main4b-div2">
                <div class="author-main4b-div1-container">
                <div class="author-main4b-div1a">
                    Featured NFT
                </div>
                <div class="author-main4b-div2b">
                    <div class="author-main4b-div2b-img">
                        <img src={slider2banner1}></img>
                    </div>
                    <div class="author-main4b-div2b-img">
                        <img src={slider2banner2}></img>
                    </div><div class="author-main4b-div2b-img">
                        <img src={slider2banner3}></img>
                    </div><div class="author-main4b-div2b-img">
                        <img src={slider2banner4}></img>
                    </div><div class="author-main4b-div2b-img">
                        <img src={slider2banner5}></img>
                    </div><div class="author-main4b-div2b-img">
                        <img src={slider2banner6}></img>
                    </div>
                    <div class="author-main4b-div2b-img">
                        <img src={slider2banner7}></img>
                    </div>
                    <div class="author-main4b-div2b-img">
                        <img src={slider2banner8}></img>
                    </div>
                    <div class="author-main4b-div2b-img">
                        <img src={slider2banner9}></img>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
                <Footer/>
            </div>
        </>
    )
};
export default Author