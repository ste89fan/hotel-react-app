import styled from 'styled-components';

const StyledHero = styled.header `
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default StyledHero;