import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../../styles/buttons';

export const NavComponent = (props) => {

    return (
        <>
        <div style={styles.buttonContainer}>
            {props.buttonSet.map((button, index) => {
                if (props.loading)
                    return (
                        <Buttons.locked value={button.id} key={index}>{button.name}</Buttons.locked>
                    )
                else
                    return (
                        <Buttons.primary value={button.id} key={index} onClick={props.clicked}>{button.name}</Buttons.primary>
                )
            })}
        </div>
        </>
    )
}

NavComponent.propTypes = {
    clicked: PropTypes.func,
    buttonSet: PropTypes.array,
    loading: PropTypes.bool,
};

const styles = {
    buttonContainer: {
        width: '100%',
        height: '100%',
    }
}