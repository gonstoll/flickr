import styled from 'styled-components';

export const Header = styled.header`
    padding: 15px 30px;
    box-shadow: 0px 4px 13px 2px rgba(0, 0, 0, .1);
    background-color: rgba(253, 253, 253, .93);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    z-index: 9;
    backdrop-filter: blur(7px);
`;