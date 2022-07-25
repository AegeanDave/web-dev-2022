import React from 'react';

const SearchBar = () => {
    return (
        <div className='section has-background-primary-light'>
            <div className='field'>
                <label className='label'>Search by Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Search by Tag</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
            </div>

            <div className="field">
                <label className="label">Filter by Type</label>
                <div className="control">
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>options</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SearchBar;