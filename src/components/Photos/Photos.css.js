import styled from 'styled-components';

export const Photos = styled.div`
    padding-top: 20px;
    margin-top: 70px;
    display: ${props => props.allLoaded ? 'none' : 'block'};

    @media (min-width: 992px) {
        column-count: 3;
        column-gap: 30px;
    }
`;