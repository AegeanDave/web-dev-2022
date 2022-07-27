import React from 'react'

const SearchBar = ({ searchKeys, setSearchKeys, typeOptions }) => {
    return (
        <div className='section has-background-primary-light'>
            <div className='field'>
                <label className='label'>Search by Name</label>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Text input'
                        value={searchKeys.name}
                        onChange={(e) =>
                            setSearchKeys({
                                ...searchKeys,
                                name: e.currentTarget.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Search by Tag</label>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Text input'
                        value={searchKeys.tag}
                        onChange={(e) =>
                            setSearchKeys({
                                ...searchKeys,
                                tag: e.currentTarget.value,
                            })
                        }
                    />
                </div>
            </div>

            <div className='field'>
                <label className='label'>Filter by Type</label>
                <div className='control'>
                    <div className='select'>
                        <select
                            value={searchKeys.type}
                            onChange={(e) => {
                                setSearchKeys({
                                    ...searchKeys,
                                    type: e.currentTarget.value,
                                })
                            }}
                        >
                            <option value=''>Select dropdown</option>
                            {typeOptions.length > 0 ? (
                                typeOptions.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))
                            ) : (
                                <option>options</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
