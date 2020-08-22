import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 7px;
    padding: 15px 25px;
    color: var(--white-color);
    border: none;
    font-size: 14px;
    background-color: ${props => props.primary ? '#2b8e2b' : 'transparent'};
    cursor: pointer;

    &:focus { outline: none; }
`;