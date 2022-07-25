import React from 'react';
import Amiibo from './Amiibo';

const Amiibos = ({amiibos}) => {
    return (
        <div className='section has-background-success-light'>
            <div className='columns is-multiline '>
                {
                    amiibos.map((amiibo, index )=> <Amiibo key={index} amiibo={amiibo} />)
                }            
            </div>

        </div>
    );
};

export default Amiibos;