import React, { useState } from 'react'
import Tag from './Tag'

const Amiibo = ({ amiibo, amiibos, setAmiibos, index }) => {
    const { name, gameSeries, image } = amiibo
    const [customTag, setCustomTag] = useState(amiibo.customTag || '')
    const handleChange = (e) => {
        setCustomTag(e.currentTarget.value)
        const newAmiibos = [...amiibos]
        newAmiibos[index].customTag = e.currentTarget.value
        setAmiibos(newAmiibos)
    }
    return (
        <div className='column is-3'>
            <div className='notification is-info'>
                <figure className='image is-square mb-3 mx-3'>
                    <img src={image} />
                </figure>
                <p className='title is-6'>{name}</p>
                <p className='subtitle is-6'>{gameSeries}</p>
                <div className='columns is-multiline is-1 is-variable'>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </div>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        placeholder='add new tag'
                        value={customTag}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Amiibo
