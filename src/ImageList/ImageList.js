import React from 'react';
import {v1 as uuid} from 'uuid';


const ImageList = (props) => {
    
    return(
        <div>
           {props.images.map(({id, largeImageURL, tags}) => (
               <div key={id}>
                   <img src={largeImageURL} alt={tags} />
                   <button>Search</button>
               </div>
              
           ))}
        </div>
    );
}

export default ImageList