import React from 'react';
import PropTypes from 'prop-types';
import { NavComponent } from '../presentation/navPresent.js';
import { buttonSet } from '../../config/buttonSet';

export const Nav = (props) => {
    const { loading } = props
    const clickHandler = (event) => {
        props.newSelection(parseInt(event.target.value));
    }

    return (
        <>
            <NavComponent clicked={clickHandler} buttonSet={buttonSet} loading={loading}/>
        </>
    )
}

Nav.propTypes = {
    newSelection: PropTypes.func,
    loading: PropTypes.bool
};