import React, { useEffect, useState } from 'react';
import { PhotoComponent } from '../presentation/photoPresent.js';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

export const Photos = (props) => {

    const [photos, updatePhotos] = useState([])

    const clickHandler = (event, id) => {
        props.newSelection(id)
    }
    useEffect(() => {
        updatePhotos(props.photos)
    },[props.photos])


    return (
        <>
        {props.loading ?  <div style={{width: '100%'}}><Loader
                            type="Audio"
                            color="teal"
                            height={400}
                            width={100}
                            timeout={300000}
                            /></div> : 
                        <PhotoComponent photos={photos} clicked={clickHandler}/>}
        </>
    )
}

Photos.propTypes = {
    photos: PropTypes.array,
    loading: PropTypes.bool,
};