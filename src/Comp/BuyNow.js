import React from 'react';
import "./BuyNow.css";

import { useState } from 'react';
import ReactModal from 'react-modal';
import cross from './assets/Author/cross.png'
import CollectorLogoETH from './assets/Author/Collector Logo -ETH.png'


function BuyNow(){
     const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div class="nft-buynow-hover-btn">
                    <button onClick={() => setIsOpen(true)}>Buy Now</button>
             </div>

            
            <ReactModal id="buynow-modal"
style={{
    overlay: {
    position: 'fixed',
    zIndex: 1020,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(7, 7, 7, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    content: {
    background: 'rgba(12, 12, 12,0.9)',
    width: 'auto',
    maxWidth: 'calc(100vw - 2rem)',
    maxHeight: 'calc(100vh - 2rem)',
    overflowY: 'auto',
    position: 'relative',
    border:'none',
    borderRadius: '0.5rem',
    }}}

isOpen={isOpen}
contentLabel="Example Modal"
onRequestClose={() => setIsOpen(false)}
>

<div class='buynow-pup-main'>
    <div class="buynow-pup-cross">
        <img onClick={() => setIsOpen(false)} src={cross}></img>
    </div>
    <div class="buynow-pup-container">
        <div class='buynow-pup-div1'>
        Checkout
        </div>
        <div class="buynow-pup-div2">
        You are about to purchase a <span>Dreadfulz #6358</span> from <span>0xf3685307f...0a9d</span>
        </div>
        <div class="buynow-pup-div3">
            <div class="buynow-pup-div3a">
                <img src={CollectorLogoETH}></img>
            </div>
            <div class="buynow-pup-div3b">
                <div class='buynow-pup-div3b-a'>
                0xf3685307f...0a9d
                </div>
                <div class='buynow-pup-div3b-b'>
                Ethereum
                </div>
            </div>
            <div class="buynow-pup-div3b-c">
                Connected
            </div>
        </div>
        <div class="buynow-pup-div4">
            <div class="buynow-pup-div4a">
                <span class='buynow-pup-div4a-txt1'>Price</span>
                <span class='buynow-pup-div4a-txt2'>0.0109 ETH</span>
            </div>
            <div class="buynow-pup-div4a">
                <span class='buynow-pup-div4a-txt1'>Rarible fee</span>
                <span class='buynow-pup-div4a-txt2'>0%</span>
            </div>
        </div>
        <div class="buynow-pup-div5">
            <span class='buynow-pup-div4a-txt1'>You will pay</span>
            <span class='buynow-pup-div4a-txt2'>0.0109 ETH</span>
        </div>
        <div class="buynow-pup-div6">
            <button>Add funds with card</button>
        </div>
        <div class="buynow-pup-div7">
        Insufficient funds in ETH
        </div>
    </div>
</div>

</ReactModal>
        </>
    )
}
export default BuyNow