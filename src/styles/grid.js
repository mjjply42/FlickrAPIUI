import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: .7fr .3fr .9fr;
    grid-template-rows: 90px .5fr .8fr;
    width: 100%;
    height: 900px;
    width: 90%;
    grid-template-areas: 
        'nav nav nav'
        'photoGrid photoGrid photoGrid'
        'photoGrid photoGrid photoGrid';

    @media (min-width: 800px) {
        height: 600px;
        grid-template-columns: .7fr .3fr .9fr;
        grid-template-rows: 90px auto auto;
        grid-template-areas: 
            'nav nav nav'
            'photoGrid photoGrid photoGrid'
            'photoGrid photoGrid photoGrid';
    }`;

export const Navigation = styled.div`
    grid-area: nav;
    padding: 20px;
    font-size: 30px;
    text-align: center;`

export const PhotoGrid = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-area: photoGrid;
    padding: 20px;
    font-size: 30px;
    text-align: center;

    @media (min-width: 800px) {
        flex-direction: column;
    };`