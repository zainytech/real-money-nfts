import react from 'react';
import './Front.css';
import Navbar from './Navbar'
import Footer from './Footer'
import BuyNow from './BuyNow'

import { Link } from 'react-router-dom';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards,Pagination } from "swiper";
import SwiperCore, { Autoplay} from "swiper";
import 'swiper/css/autoplay';

// import BiSearchAlt from 'react-icons/bi';
import { FaBeer } from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
import {AiFillWallet} from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';
import {AiFillWarning} from 'react-icons/ai';
import {BsFillReplyFill} from 'react-icons/bs';

import logo from './assets/logo.png';
import downarrow from './assets/down-arrow.png';
import bg5 from './assets/bg-5.jpg';
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

import banner1 from './assets/banner1.gif';
import banner2 from './assets/banner2.gif';
import banner3 from './assets/banner3.jpg';
import banner4 from './assets/banner4.jpg';
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

import browseimg1 from './assets/browse-category/browse-img1.jpg';
import browseimg2 from './assets/browse-category/browse-img2.jpg';
import browseimg3 from './assets/browse-category/browse-img3.jpg';
import browseimg4 from './assets/browse-category/browse-img4.jpg';
import browseimg5 from './assets/browse-category/browse-img5.jpg';
import browseimg6 from './assets/browse-category/browse-img6.jpg';
import browseimg7 from './assets/browse-category/browse-img7.jpg';
import browseimg8 from './assets/browse-category/browse-img8.jpg';
import browseimg9 from './assets/browse-category/browse-img9.jpg';
import browseimg10 from './assets/browse-category/browse-img10.jpg';
import browseimg11 from './assets/browse-category/browse-img11.jpg';
import browseimg12 from './assets/browse-category/browse-img12.jpg';
import browseimg13 from './assets/browse-category/browse-img13.jpg';
import browseimg14 from './assets/browse-category/browse-img14.jpg';
import browseimg15 from './assets/browse-category/browse-img15.jpg';
import browseimg16 from './assets/browse-category/browse-img16.jpg';
import browseimg17 from './assets/browse-category/browse-img17.jpg';
import browseimg18 from './assets/browse-category/browse-img18.jpg';

import topseller1 from './assets/top-sellers/01.jpg';
import topseller2 from './assets/top-sellers/02.jpg';
import topseller3 from './assets/top-sellers/03.jpg';
import topseller4 from './assets/top-sellers/04.jpg';
import topseller5 from './assets/top-sellers/05.jpg';
import topseller6 from './assets/top-sellers/06.jpg';
import topseller7 from './assets/top-sellers/07.jpg';
import topseller8 from './assets/top-sellers/08.jpg';



function Front(){
    const [showText, setShowText] = useState('');
    const onClick3dots1 = () => setShowText(!showText);
    
     const [isOpen, setIsOpen] = useState(false);

    return(
        <>
<Navbar/>
            
            
            <div class="front-main">
                <div class="front-main-bg">
                    <img src={bg5}></img>
                </div>

                <div class="front-main-container">
                    <div class="front-main-a">
                        <div class="front-main-a-div1">
                            <span class="front-main-a-div1-txt1">Create, Collect And Sell Digital Items.</span>
                            <span class="front-main-a-div1-txt2">Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens. Buy, Sell, And Discover Exclusive Digital Assets.</span>
                            <div class="front-main-a-div1-btn">
                            <Link to="/explore" style={{textDecoration: 'none'}}><div class='front-main-a-div1-btndiv'><button class="front-main-a-div1-btn1">Explore</button></div></Link>
                            <Link to="/create" style={{textDecoration: 'none'}}><div class='front-main-a-div1-btndiv'><button class="front-main-a-div1-btn2">Create</button></div></Link>
                            </div>
                        </div>
                        <div class="front-main-a-div2">
    <Swiper style={{width:'70%',height:'auto'}}
        effect={"cards"}
        loop={true}
        grabCursor={true}
        modules={[EffectCards, Autoplay]} autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="swiper1-container">
            <div class="swiper1-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper1-div1-img"><img src={sellericon1}></img></div></Link>
                <span class="swiper1-div1-txt">rasselmrh</span>
                <BsThreeDots onClick={onClick3dots1} style={{position:'absolute',color:'black',right:'1rem',top:'2rem'}}/>
            </div>
            {showText ? <Text /> : null}
            <div class="swiper1-div2">
                <img src={banner1}></img>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper1-div3a-txt1">Black Cat</span>
                    <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey',}}/>
                    <span class="swiper1-div3a-txt2 ">230</span>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper1-container">
            <div class="swiper1-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper1-div1-img"><img src={sellericon1}></img></div></Link>
                <span class="swiper1-div1-txt">icus x3</span>
                <BsThreeDots style={{position:'absolute',color:'black',right:'1rem',top:'2rem'}}/>
            </div>
            <div class="swiper1-div2">
                <img src={banner2}></img>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper1-div3a-txt1">Silly C4T de</span>
                    <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey'}}/>
                    <span class="swiper1-div3a-txt2">230</span>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper1-container">
            <div class="swiper1-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper1-div1-img"><img src={sellericon2}></img></div></Link>
                <span class="swiper1-div1-txt">Imo35 ucas</span>
                <BsThreeDots style={{position:'absolute',color:'black',right:'1rem',top:'2rem'}}/>
            </div>
           
            <div class="swiper1-div2">
                <img src={banner3}></img>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper1-div3a-txt1">Future Rocket</span>
                    <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey'}}/>
                    <span class="swiper1-div3a-txt2">230</span>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper1-container">
            <div class="swiper1-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper1-div1-img"><img src={sellericon1}></img></div></Link>
                <span class="swiper1-div1-txt">Gucci Lucas</span>
                <BsThreeDots style={{position:'absolute',color:'black',right:'1rem',top:'2rem'}}/>
            </div>
            <div class="swiper1-div2">
                <img src={banner4}></img>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper1-div3a-txt1">Euphoria de</span>
                    <span class="swiper1-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey'}}/>
                    <span class="swiper1-div3a-txt2">230</span>
                </div>
            </div>
            </div>
        </SwiperSlide>

      </Swiper>
                        </div>
                    </div>
                </div>
                <div class="front-container2">
                    <div class="front-main2-head">
                        Available For Sale
                    </div>
                    <div class="front-main2-content">
                    
                    <Swiper style={{width:'100%',height:'100%'}}
        // loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="swiper1-container">
            <div class="swiper2-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon1}></img></div></Link>
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller1icon2}></img></div></Link>
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller1icon3}></img></div></Link>
                <span class="swiper2-div1-txt">Gucci Lucas</span>
                <BsThreeDots style={{position:'absolute',color:'black',right:'0rem',top:'1.3rem'}}/>
            </div>
            <div class="swiper2-div2">
                <img src={slider2banner1}></img>
                <div class="nft-buynow-hover-btn">
                    <BuyNow/>
                </div>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper2-div3a-txt1">Euphoria de</span>
                    <span class="swiper2-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey'}}/>
                    <span class="swiper2-div3a-txt2">230</span>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper1-container">
            <div class="swiper2-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon1}></img></div></Link>
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                <span class="swiper2-div1-txt">Rassel mrh</span>
                <BsThreeDots style={{position:'absolute',color:'black',right:'0rem',top:'1.3rem'}}/>

            </div>
            <div class="swiper2-div2">
                <img src={slider2banner2}></img>
                <div class="nft-buynow-hover-btn">
                    <BuyNow/>
                </div>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper2-div3a-txt1">Walking On Air</span>
                    <span class="swiper2-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey'}}/>
                    <span class="swiper2-div3a-txt2">230</span>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="swiper1-container">
            <div class="swiper2-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                <span class="swiper2-div1-txt">Blexa z</span>
                <BsThreeDots style={{position:'absolute',color:'black',right:'0rem',top:'1.3rem'}}/>

            </div>
            <div class="swiper2-div2">
                <img src={slider2banner3}></img>
                <div class="nft-buynow-hover-btn">
                    <BuyNow/>
                </div>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper2-div3a-txt1">Futuristic Cols</span>
                    <span class="swiper2-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey'}}/>
                    <span class="swiper2-div3a-txt2">230</span>
                </div>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div class="swiper1-container">
            <div class="swiper2-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                <span class="swiper2-div1-txt">John Doe</span>
                <BsThreeDots style={{position:'absolute',color:'black',right:'0rem',top:'1.3rem'}}/>

            </div>
            <div class="swiper2-div2">
                <img src={slider2banner4}></img>
                <div class="nft-buynow-hover-btn">
                    <BuyNow/>
                </div>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper2-div3a-txt1">Space Carfts</span>
                    <span class="swiper2-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey'}}/>
                    <span class="swiper2-div3a-txt2">230</span>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="swiper1-container">
            <div class="swiper2-div1">
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img1"><img src={seller1icon1}></img></div></Link>
            <Link to="/author" style={{textDecoration: 'none'}}><div class="swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                <span class="swiper2-div1-txt">Rassel mrh</span>
                <BsThreeDots style={{position:'absolute',color:'black',right:'0rem',top:'1.3rem'}}/>

            </div>
            <div class="swiper2-div2">
                <img src={slider2banner2}></img>
                <div class="nft-buynow-hover-btn">
                    <BuyNow/>
                </div>
            </div>
            <div class="swiper1-div3">
                <div class="swiper1-div3a">
                    <span class="swiper2-div3a-txt1">Walking On Air</span>
                    <span class="swiper2-div3a-txt2">Price: 0.34 ETH</span>
                </div>
                <div class="swiper1-div3b">
                    <AiFillHeart style={{color:'grey'}}/>
                    <span class="swiper2-div3a-txt2">230</span>
                </div>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
                    </div>
                </div>
                <div class="front-container2">
                    <div class="front-main2-head">
                        Browse By Category
                    </div>
                    <div class="front-main3-content">
                        <div class='front-main3-div1'>
                            <div class="front-main3-div1a">
                                <div class="front-main3-div1a-container">
                                    <div class="front-main3-div1a-swiper">
                                    <Swiper style={{width:'100%',height:'100%'}}
                                        // loop={true}
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        modules={[Pagination,Autoplay]} autoplay={true}
                                        
                                        
                                        className="mySwiper"
                                    >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg1}></img>
                                        </SwiperSlide >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg2}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg3}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg1}></img>
                                        </SwiperSlide>
                                    </Swiper>
                                    </div>
                                    <div class="front-main3-div1a-txt">
                                        Digital Art
                                    </div>
                                </div>
                            </div>
                            <div class="front-main3-div1a">
                                <div class="front-main3-div1a-container">
                                    <div class="front-main3-div1a-swiper">
                                    <Swiper style={{width:'100%',height:'100%'}}
                                        // loop={true}
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        modules={[Pagination,Autoplay]} autoplay={true}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        
                                        
                                        className="mySwiper"
                                    >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg4}></img>
                                        </SwiperSlide >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg5}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg6}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg5}></img>
                                        </SwiperSlide>
                                    </Swiper>
                                    </div>
                                    <div class="front-main3-div1a-txt">
                                        Music
                                    </div>
                                </div>
                            </div>
                            <div class="front-main3-div1a">
                                <div class="front-main3-div1a-container">
                                    <div class="front-main3-div1a-swiper">
                                    <Swiper style={{width:'100%',height:'100%'}}
                                        // loop={true}
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        modules={[Pagination,Autoplay]} autoplay={true}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        
                                        
                                        className="mySwiper"
                                    >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg7}></img>
                                        </SwiperSlide >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg8}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg9}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg8}></img>
                                        </SwiperSlide>
                                    </Swiper>
                                    </div>
                                    <div class="front-main3-div1a-txt">
                                        Music
                                    </div>
                                </div>
                            </div>


                        {/* <div class='front-main3-div1'> */}
                            <div class="front-main3-div1a">
                                <div class="front-main3-div1a-container">
                                    <div class="front-main3-div1a-swiper">
                                    <Swiper style={{width:'100%',height:'100%'}}
                                        // loop={true}
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        modules={[Pagination,Autoplay]} autoplay={true}
                                        pagination={{
                                        clickable: true,
                                        }}
                                    
                                        
                                        
                                        className="mySwiper"
                                    >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg10}></img>
                                        </SwiperSlide >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg11}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg12}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg11}></img>
                                        </SwiperSlide>
                                    </Swiper>
                                    </div>
                                    <div class="front-main3-div1a-txt">
                                        Sports
                                    </div>
                                </div>
                            </div>
                            <div class="front-main3-div1a">
                                <div class="front-main3-div1a-container">
                                    <div class="front-main3-div1a-swiper">
                                    <Swiper style={{width:'100%',height:'100%'}}
                                        // loop={true}
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        modules={[Pagination,Autoplay]} autoplay={true}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        
                                        
                                        className="mySwiper"
                                    >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg13}></img>
                                        </SwiperSlide >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg14}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg15}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg16}></img>
                                        </SwiperSlide>
                                    </Swiper>
                                    </div>
                                    <div class="front-main3-div1a-txt">
                                        Music
                                    </div>
                                </div>
                            </div>
                            <div class="front-main3-div1a">
                                <div class="front-main3-div1a-container">
                                    <div class="front-main3-div1a-swiper">
                                    <Swiper style={{width:'100%',height:'100%'}}
                                        // loop={true}
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        modules={[Pagination,Autoplay]} autoplay={true}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        
                                    
                                        className="mySwiper"
                                    >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg16}></img>
                                        </SwiperSlide >
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg17}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg18}></img>
                                        </SwiperSlide>
                                        <SwiperSlide style={{border:'none'}}>
                                        <img src={browseimg17}></img>
                                        </SwiperSlide>
                                    </Swiper>
                                    </div>
                                    <div class="front-main3-div1a-txt">
                                        Music
                                    </div>
                                </div>
                            </div>

                        {/* </div> */}
                        </div>

                    </div>
                </div>

                <div class="front-container2">
                    <div class="front-main2-head">
                        Top Sellers
                    </div>
                    <div class="front-main4-content">
                        <div class="front-main4-div1">
                            <div class="front-main4-div1a">
                                <div class="front-main4-div1a-div1">
                                    <img src={topseller1}></img>
                                </div>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="front-main4-div1a-div2">
                                    <img src={sellericon1}></img>
                                </div></Link>
                                <div class="front-main4-div1a-div3">
                                    <div class="front-main4-div1a-div3a">
                                        01
                                    </div>
                                    <div class="front-main4-div1a-div3b">
                                        <span class="front-main4-div1a-div3b-txt1">Gihan Fernindo</span>
                                        <span class="front-main4-div1a-div3b-txt2">$23,002.98</span>
                                    </div>
                                </div>
                            </div>
                            <div class="front-main4-div1a">
                                <div class="front-main4-div1a-div1">
                                    <img src={topseller2}></img>
                                </div>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="front-main4-div1a-div2">
                                    <img src={seller1icon2}></img>
                                </div></Link>
                                <div class="front-main4-div1a-div3">
                                    <div class="front-main4-div1a-div3a">
                                        02
                                    </div>
                                    <div class="front-main4-div1a-div3b">
                                        <span class="front-main4-div1a-div3b-txt1">Gihan Fernindo</span>
                                        <span class="front-main4-div1a-div3b-txt2">$23,002.98</span>
                                    </div>
                                </div>
                            </div>
                            <div class="front-main4-div1a">
                                <div class="front-main4-div1a-div1">
                                    <img src={topseller3}></img>
                                </div>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="front-main4-div1a-div2">
                                    <img src={sellericon2}></img>
                                </div></Link>
                                <div class="front-main4-div1a-div3">
                                    <div class="front-main4-div1a-div3a">
                                        03
                                    </div>
                                    <div class="front-main4-div1a-div3b">
                                        <span class="front-main4-div1a-div3b-txt1">Gihan Fernindo</span>
                                        <span class="front-main4-div1a-div3b-txt2">$23,002.98</span>
                                    </div>
                                </div>
                            </div>
                            <div class="front-main4-div1a">
                                <div class="front-main4-div1a-div1">
                                    <img src={topseller4}></img>
                                </div>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="front-main4-div1a-div2">
                                    <img src={seller4icon3}></img>
                                </div></Link>
                                <div class="front-main4-div1a-div3">
                                    <div class="front-main4-div1a-div3a">
                                        04
                                    </div>
                                    <div class="front-main4-div1a-div3b">
                                        <span class="front-main4-div1a-div3b-txt1">Gihan Fernindo</span>
                                        <span class="front-main4-div1a-div3b-txt2">$23,002.98</span>
                                    </div>
                                </div>
                            </div>
                            
                        

                        {/* <div class="front-main3-div1"> */}
                            <div class="front-main4-div1a">
                                <div class="front-main4-div1a-div1">
                                    <img src={topseller5}></img>
                                </div>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="front-main4-div1a-div2">
                                    <img src={seller1icon3}></img>
                                </div></Link>
                                <div class="front-main4-div1a-div3">
                                    <div class="front-main4-div1a-div3a">
                                        05
                                    </div>
                                    <div class="front-main4-div1a-div3b">
                                        <span class="front-main4-div1a-div3b-txt1">Gihan Fernindo</span>
                                        <span class="front-main4-div1a-div3b-txt2">$23,002.98</span>
                                    </div>
                                </div>
                            </div>
                            <div class="front-main4-div1a">
                                <div class="front-main4-div1a-div1">
                                    <img src={topseller6}></img>
                                </div>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="front-main4-div1a-div2">
                                    <img src={seller4icon2}></img>
                                </div></Link>
                                <div class="front-main4-div1a-div3">
                                    <div class="front-main4-div1a-div3a">
                                        06
                                    </div>
                                    <div class="front-main4-div1a-div3b">
                                        <span class="front-main4-div1a-div3b-txt1">Gihan Fernindo</span>
                                        <span class="front-main4-div1a-div3b-txt2">$23,002.98</span>
                                    </div>
                                </div>
                            </div>
                            <div class="front-main4-div1a">
                                <div class="front-main4-div1a-div1">
                                    <img src={topseller7}></img>
                                </div>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="front-main4-div1a-div2">
                                    <img src={seller4icon1}></img>
                                </div></Link>
                                <div class="front-main4-div1a-div3">
                                    <div class="front-main4-div1a-div3a">
                                        07
                                    </div>
                                    <div class="front-main4-div1a-div3b">
                                        <span class="front-main4-div1a-div3b-txt1">Gihan Fernindo</span>
                                        <span class="front-main4-div1a-div3b-txt2">$23,002.98</span>
                                    </div>
                                </div>
                            </div>
                            <div class="front-main4-div1a">
                                <div class="front-main4-div1a-div1">
                                    <img src={topseller8}></img>
                                </div>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="front-main4-div1a-div2">
                                    <img src={seller4icon2}></img>
                                </div></Link>
                                <div class="front-main4-div1a-div3">
                                    <div class="front-main4-div1a-div3a">
                                        08
                                    </div>
                                    <div class="front-main4-div1a-div3b">
                                        <span class="front-main4-div1a-div3b-txt1">Gihan Fernindo</span>
                                        <span class="front-main4-div1a-div3b-txt2">$23,002.98</span>
                                    </div>
                                </div>
                            </div>
                            
                        {/* </div> */}
                        </div>
                    </div>
                </div>

                <div class="front-container2">
                    <div class="front-main2-head">
                        EXCLUSIVE RNFT DROPS
                    </div>
                    <div class="front-main5-content">
                        <div class="front-main5-div1">
                            <div class="front-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="swiper2-div1">
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

<Footer/>

            </div>


        </>
    )
};
export default Front

function Text(){
    return(
        <>
<div class="front-swiper-3dots">
    <div class="front-swiper-3dots-div1"><AiFillWarning style={{position:'absolute',left:'0.5rem',fontSize:'18px'}}/>Repoprt</div>
    <div class="front-swiper-3dots-div1 front-swiper-3dots-div1-border"><BsFillReplyFill style={{position:'absolute',left:'0.5rem',fontSize:'18px'}}/>Share</div>
</div>
        </>
    )
 };