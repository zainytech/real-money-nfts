import react from 'react';
import './Footer.css';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsTwitch} from 'react-icons/bs';
import {ImReddit} from 'react-icons/im';
import {AiOutlineInstagram} from 'react-icons/ai';

function Footer(){
    return(
        <>
        <div class="front-main6">
    <div class="front-main6-container">
        <div class="front-main6-div1">
            <div class="front-main6-div1a">
                <span>Get The Latest Rarible Updates</span>
            </div>
            <div class="front-main6-div1b">
                <input type="text" placeholder='Your Email Address'></input>
                <button>SUBSCRIBE NOW</button>
            </div>

        </div>
        <div class='front-main6-div2'>
            <div class='front-main6-div1a'>
                Join the Community
            </div>
            <div class="front-main6-div2b">
                <span class='front-main6-icon'><AiOutlineTwitter style={{color:'white',padding:'0.5rem',fontSize:'22px'}}/></span>
                <span class='front-main6-icon'><BsTwitch style={{color:'white',padding:'0.5rem',fontSize:'22px'}}/></span>
                <span class='front-main6-icon'><ImReddit style={{color:'white',padding:'0.5rem',fontSize:'22px'}}/></span>
                <span class='front-main6-icon'><AiOutlineInstagram style={{color:'white',padding:'0.5rem',fontSize:'22px'}}/></span>
            </div>
        </div>
    </div>
    <div class="front-main6-div3">
    All rights reserved © Real Age Money || Design By: <a href="https://bitbricktech.com/" target="_blank">Bitbrick Technology Pvt.Ltd</a>
    </div>

</div>

        </>
    )
};
export default Footer