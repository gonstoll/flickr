import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 7px;
    padding: 15px 25px;
    color: var(--white-color);
    border: none;
    font-size: 16px;
    background-color: ${props => props.primary ? '#8fc56d' : 'transparent'};
    cursor: pointer;

    &:focus { outline: none; }
    &:hover {
        background-color: ${props => props.primary ? '#7fb55d' : 'transparent'};
    }
`;