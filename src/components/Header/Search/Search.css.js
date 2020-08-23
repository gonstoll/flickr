import styled from 'styled-components';

export const Input = styled.input`
    border-radius: 7px;
    border: none;
    padding: 15px;
    padding-left: 45px;
    background-color: #dcdcdc;
    color: var(--dark-color);
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;

    ::-webkit-input-placeholder{ color: #797979; }
    ::-moz-placeholder{ color: #797979; }
    :-ms-input-placeholder{ color: #797979; }
    :-moz-placeholder{ color: #797979; }

    &:focus { outline: none; }
    &:disabled { cursor: not-allowed; }
`;

export const EmptySearch = styled.button`
    color: var(--dark-color);
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: ${props => props.hasText ? 'block' : 'none'};
`;

export const Form = styled.form`
    flex: 1;
    max-width: 900px;
    margin: 0 20px;
    position: relative;

    button {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        padding: 0;

        &:focus { outline: none; }
    }

    ${EmptySearch} {
        right: 20px;
        left: unset;
    }
`;