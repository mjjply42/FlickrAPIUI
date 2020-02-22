import styled from 'styled-components';

const primary = styled.button`
    display: inline-block;
    width: 17%;
    height: 70%;
    background-color: teal;
    border: none;
    outline: none;
    font-size: 1rem;
    color: white;
    margin: 0px 10px 0px 10px;
    border-radius: 25px;
    box-shadow: 0px 2px 8px #888888;
    
    &:hover {
        background-color: orange;
        cursor: pointer;
    };
    &:active {
        background-color: #D47F04;
    }
    &focus {
        
    }`

    const locked = styled.button`
    display: inline-block;
    width: 17%;
    height: 70%;
    background-color: #004646;
    border: none;
    outline: none;
    font-size: 1rem;
    color: grey;
    margin: 0px 10px 0px 10px;
    border-radius: 25px;
    
    &:hover {
        background-color: #004646;
    };
    &:active {
        background-color: #004646;
    }
    &focus {
        
    }`

export const Buttons = {
    primary: primary,
    locked: locked,
}