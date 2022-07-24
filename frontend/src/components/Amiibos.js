import React from 'react';
import Amiibo from './Amiibo';

const Amiibos = () => {
    return (
        <div className='section has-background-success-light'>
            <div className='columns is-multiline '>
                <Amiibo />
                <Amiibo />
            </div>

        </div>
    );
};

export default Amiibos;