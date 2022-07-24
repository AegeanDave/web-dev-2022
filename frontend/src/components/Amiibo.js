import React from 'react';
import Tag from './Tag';

const Amiibo = () => {
    return (

        <div className='column is-3'>
            <div className="notification is-info">
                <figure className="image is-square my-3">
                    <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png" />
                </figure>
                <p className="title is-4">Mario</p>
                <p className="subtitle is-5">Super Smash Bros.</p>
                <div className='columns is-multiline is-1 is-variable'>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </div>
                <div class="control">
                    <input class="input" type="text" placeholder="add new tag" />
                </div>
            </div>
        </div>


    );
};

export default Amiibo;