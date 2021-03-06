import React from 'react';

const ImageSearch = ({handleGetRequest}) => {
    
    return(
        <div>
            <form onSubmit={handleGetRequest}>
                <input type="text" autoComplete="off" name="searchValue" placeholder="Search for images" />
                <button>Search</button>
            </form>
        </div>
    );
}

export default ImageSearch