import react from 'react';
import './Explore.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import BuyNow from './BuyNow'
import { Link } from 'react-router-dom';

import exploreheadbanner from './assets/Explore/explore-head-banner.jpg'
import sellericon1 from './assets/seller-icon1.png';
import seller1icon3 from './assets/seller1-icon3.png';
import seller2icon1 from './assets/seller2-icon1.gif';
import seller4icon1 from './assets/seller4-icon1.png';
import seller4icon2 from './assets/seller4-icon2.gif';
import seller5icon1 from './assets/seller5-icon1.png';
import slider2banner1 from './assets/slider2-banner1.jpg';
import slider2banner2 from './assets/slider2-banner2.gif';
import slider2banner5 from './assets/slider2-banner5.gif';
import slider2banner6 from './assets/slider2-banner6.jpg';
import slider2banner7 from './assets/slider2-banner7.gif';
import slider2banner8 from './assets/slider2-banner8.jpg';
import slider2banner9 from './assets/slider2-banner9.jpg';
import slider2banner10 from './assets/slider2-banner10.jpg';

import {AiOutlineSearch} from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
import {AiFillWallet} from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';

function Explore(){
    return(
        <>
            <Navbar/>
            <div class="explore-main">
                <div class="explore-main-bg">
                    <img src={exploreheadbanner}></img>
                </div>

                <div class="explore-main1-container">
                    <div class="explore-main1">
                        <span class="explore-main1-txt1">Explore All NFT's</span>
                        <span class="explore-main1-txt2 explore-main1-txt2-bold">Home</span>
                        <span class="explore-main1-txt2"> - Explore</span>
                    </div>
                </div>

                <div class="explore-main2">
                    <div class="explore-main2-container">
                        <div class="explore-main2-a">
                            <div class="explore-main2-a-div1">
                            <span class="explore-main2-a-div1-txt">Select a Category</span>
                                <select id="explore-main2-a-div1-select">
                                    <option class="explore-main2-a-div1-option">All Category</option>
                                    <option class="explore-main2-a-div1-option">Art</option>
                                    <option class="explore-main2-a-div1-option">Music video</option>
                                    <option class="explore-main2-a-div1-option">Digital Anime</option>
                                </select>
                            </div>
                            <div class="explore-main2-a-div1">
                            <span class="explore-main2-a-div1-txt">Sort By</span>
                                <select id="explore-main2-a-div1-select">
                                    <option class="explore-main2-a-div1-option">Newest Trending</option>
                                    <option class="explore-main2-a-div1-option">Trending</option>
                                    <option class="explore-main2-a-div1-option">Most Viewed</option>
                                    <option class="explore-main2-a-div1-option">Less Viewed</option>
                                    <option class="explore-main2-a-div1-option">Ending Soon</option>
                                    <option class="explore-main2-a-div1-option">Recently Sold</option>
                                    <option class="explore-main2-a-div1-option">Recently Created</option>
                                    <option class="explore-main2-a-div1-option">Recently Viewed</option>

                                </select>
                            </div>
                            <div class="explore-main2-a-div2">
                                <input type="text" placeholder='Search NFT'></input>
                                <AiOutlineSearch style={{position:'absolute',right:'1rem',top:'1rem',fontSize:'30px'}}/>
                            </div>
                        </div>
                        <div class="explore-main2-b">
                        {/* <div class="explore-main5-content"> */}
                        <div class="explore-main5-div1">
                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner5}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>

                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller1icon3}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner6}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner1}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner7}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                        

                        {/* <div class="front-main5-div1"> */}
                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner10}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>

                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller1icon3}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner8}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner2}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={seller5icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller4icon2}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner9}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={seller1icon3}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller2icon1}></img></div></Link>
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img2"><img src={seller4icon1}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner1}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
                            </div>
                            <div class="explore-main5-div1a">
                            {/* <div class="swiper1-main5"> */}
                                <div class="explore-swiper2-div1">
                                <Link to="/author" style={{textDecoration: 'none'}}><div class="explore-swiper2-div1-img1"><img src={sellericon1}></img></div></Link>
                                    <span class="explore-swiper2-div1-txt">Gucci Lucas</span>
                                    <BsThreeDots style={{position:'absolute',color:'black',fontSize:'20px',right:'1rem',top:'1.3rem'}}/>
                                </div>
                                <div class="explore-main5-swiper2-div2">
                                    <img src={slider2banner5}></img>
                                    <div class="nft-buynow-hover-btn">
                                        <BuyNow/>
                                    </div>
                                </div>
                                <div class="explore-swiper1-div3">
                                    <div class="explore-swiper1-div3a">
                                        <span class="explore-swiper1-div3a-txt1">Euphoria de</span>
                                        <span class="explore-swiper1-div3a-txt2">Price: 0.34 ETH</span>
                                    </div>
                                    <div class="explore-swiper1-div3b">
                                        <AiFillHeart style={{color:'grey',fontSize:'20px',paddingTop:'1rem'}}/>
                                        <span class="explore-swiper1-div3a-txt2">230</span>
                                    </div>
                                </div>
                            {/* </div> */}
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
export default Explore