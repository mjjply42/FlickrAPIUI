import React from 'react';
import { Image } from '../../styles/images';
import PropTypes from 'prop-types';

export const PhotoComponent = (props) =>
{
    return (
        <>
        {props.photos.map((item, index) => {
            return (
                <div key={index} style={styles.outerPhotoContainer}>
                <Image onClick={(event) => {props.clicked(event, item['id'])}} style={styles.photos}
                    src={item['url']} />
                </div>
            )
        })}
        </>
    )
}

PhotoComponent.propTypes = {
    photos: PropTypes.array,
    clicked: PropTypes.func,
};

const styles = {
    outerPhotoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}