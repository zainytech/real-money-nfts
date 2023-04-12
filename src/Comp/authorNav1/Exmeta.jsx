import React from "react";
import './Exmeta.css'

import meta from './Img/meta.png';

const Exmeta = () => {
    return(
        <>
            <div className="exmeta">
                <h4>Connect your wallet</h4>
                <div>Connect with one of available wallet</div>
                <div>providers or <a>create a new wallet</a></div>
                <div className="exmeta-row1">
                    <img src={meta}/>
                    <div className="exmeta-row1-col">
                        <h4>Meta Mask</h4>
                        <div>Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exmeta;