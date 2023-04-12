import react from 'react';
import './Create.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { useState } from 'react';
import BuyNow from './BuyNow'
import { Link } from 'react-router-dom';

import {FaUpload} from 'react-icons/fa';
import {FaArtstation} from 'react-icons/fa';
import {GiCardRandom} from 'react-icons/gi';
import {IoGameController} from 'react-icons/io5';
import {SiApplemusic} from 'react-icons/si';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaMoneyBillAlt} from 'react-icons/fa';
import {FaBoxOpen} from 'react-icons/fa';
import {AiFillGift} from 'react-icons/ai';
function Create(){
    return(
        <>
<Navbar/>
<div class="create-main">
<div class="create-main4a-cnfts">
                    <div class="create-main4a-cnfts-container">
                        <div class="create-heading">Create New NFT</div>
                        <div class="create-main4a-cnfts-div1">
                            <span class="create-main4a-cnfts-div1-txt">PNG,JPG,JPEG,SVG,WEBP,Mp3 & Mp4 (Max-150mb)</span>
                            <label class="custom-file-upload1-cnfts">
                                <input type="file"/>
                                <FaUpload style={{paddingRight:'0.5rem'}}/>Upload a file
                            </label>
                        </div>
                        <div class="create-main4a-cnfts-div2">
                            <input type="text" placeholder="Item Name"></input>
                        </div>
                        <div class="create-main4a-cnfts-div3">
                            <textarea placeholder="Item Discription" rows="10"></textarea>
                        </div>
                        <div class="create-main4a-cnfts-div4">
                            <div class="create-main4a-cnfts-div4a">
                                Select Item Catergory
                            </div>
                            <div class="create-main4a-cnfts-div4b">
                                <div class="create-main4a-cnfts-div4b-a">
                                    <FaArtstation style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Art
                                </div>
                                <div class="create-main4a-cnfts-div4b-a">
                                    <GiCardRandom style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Trading Cards
                                </div>
                                <div class="create-main4a-cnfts-div4b-a">
                                    <IoGameController style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Gaming
                                </div>
                                <div class="create-main4a-cnfts-div4b-a">
                                    <SiApplemusic style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Music
                                </div>
                                <div class="create-main4a-cnfts-div4b-a">
                                    <AiOutlineTwitter style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Tweets
                                </div>
                                <div class="create-main4a-cnfts-div4b-a">
                                    <FaMoneyBillAlt style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Rare Item
                                </div>
                                <div class="create-main4a-cnfts-div4b-a">
                                    <FaBoxOpen style={{paddingRight:'0.5rem',fontSize:'16px'}}/>Collectibles
                                </div>
                                <div class="create-main4a-cnfts-div4b-a">
                                    <AiFillGift style={{paddingRight:'0.5rem',fontSize:'16px'}}/>NFT Gifts
                                </div>
                            </div>
                        </div>
                        <div class="create-main4a-cnfts-div5">
                            <div class="create-main4a-cnfts-div5a">
                                <span class="create-main4a-cnfts-div5a-txt">Select Currency</span>
                                    <select id="create-main4a-allnfts-div1a-select">
                                        <option class="create-main4a-allnfts-div1a-option">Ethereum</option>
                                        <option class="create-main4a-allnfts-div1a-option">Bitcoin</option>
                                        <option class="create-main4a-allnfts-div1a-option">Dollar</option>
                                        <option class="create-main4a-allnfts-div1a-option">Pound</option>
                                    </select>
                            </div>
                            <div class="create-main4a-cnfts-div5b">
                                <input type="text" placeholder="Item Name"></input>
                            </div>
                            <div class="create-main4a-cnfts-div5c">
                                <input type="text" placeholder="Royalities"></input>
                            </div>
                            <div class="create-main4a-cnfts-div5c">
                                <input type="text" placeholder="Size"></input>
                            </div>
                            <div class="create-main4a-cnfts-div5c">
                                <input type="text" placeholder="Number Of Copies"></input>
                            </div>
                        </div>
                        <div class="create-main4a-cnfts-div6">
                            <button>Create Item</button>
                        </div>

                    </div>
                </div>
                </div>


<Footer/>
        </>
    )
}
export default Create