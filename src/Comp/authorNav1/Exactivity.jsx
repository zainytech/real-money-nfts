import React from 'react';
import './Exactivity.css';

import code from './Img/code.gif';
import code1 from './Img/code1.gif';
import code3 from './Img/code3.gif';
import code4 from './Img/code4.gif';
import code5 from './Img/code5.gif';


const Exactivity = () => {
    return(
        <>
            <div className='exactive'>
                <h4 className='exactive-row1'>Author's Activity</h4>
                <div className='exactive-row2'>
                    <div><img src={code}/></div>
                    <div className='exactive-row2-div2'>
                        <h3>Gold digger x</h3>
                        <div className='exactive-row2-div3'>GOLD DIGGER (x Antoni Tudisco) #44/44 was put up for sale for <b>0.0991 ETH</b></div>
                        <div>By: <b>@rasselmrh</b></div>
                        <div>At: 10/07/2022, 10:03 am</div>
                    </div>
                </div>

                <div className='exactive-row2'>
                    <div><img src={code1}/></div>
                    <div className='exactive-row2-div2'>
                        <h3>ghost lix xrf</h3>
                        <div className='exactive-row2-div3'>two rare collection purchased for <b>0.001 ETH</b></div>
                        <div>By: <b>@reo2lxsr</b></div>
                        <div>At: 10/07/2022, 08:23 am</div>
                    </div>
                </div>
                
                <div className='exactive-row2'>
                    <div><img src={code3}/></div>
                    <div className='exactive-row2-div2'>
                        <h3>Trust In meh</h3>
                        <div className='exactive-row2-div3'>The Shopping Cart #54/65 was put up for sale for <b>0.021 ETH</b></div>
                        <div>By: <b>@reo2lxsr</b></div>
                        <div>At: 10/07/2022, 12:03 am</div>
                    </div>
                </div>
                
                <div className='exactive-row2'>
                    <div><img src={code4}/></div>
                    <div className='exactive-row2-div2'>
                        <h3>Sysytan #0le</h3>
                        <div className='exactive-row2-div3'>A offer of $200.00 was placed for ÜNDERSTANDING (Sean Williams) #1/20</div>
                        <div>By: <b>@reo2lxsr</b></div>
                        <div>At: 10/07/2022, 10:03 am</div>
                    </div>
                </div>

                <div className='exactive-row2'>
                    <div><img src={code5}/></div>
                    <div className='exactive-row2-div2'>
                        <h3>ghost lix xrf</h3>
                        <div className='exactive-row2-div3'>two rare collection purchased for <b>0.001 ETH</b></div>
                        <div>By: <b>@reo2lxsr</b></div>
                        <div>At: 10/07/2022, 02:03 pm</div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Exactivity;