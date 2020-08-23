import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 7px;
    padding: 15px 25px;
    color: var(--white-color);
    border: none;
    font-size: 16px;
    background-color: ${props => props.primary ? '#04a87c' : 'transparent'};
    cursor: pointer;

    &:focus { outline: none; }
    &:hover {
        background-color: ${props => props.primary ? '#009f74' : 'transparent'};
    }

    span { font-weight: bold; }
`;