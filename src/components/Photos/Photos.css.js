import styled from 'styled-components';

export const PhotosContainer = styled.div`
    margin-top: 20px;
    display: ${props => props.allLoaded ? 'none' : 'block'};

    @media (min-width: 768px) {
        column-count: ${props => props.error ? 1 : 3};
        column-gap: 30px;
    }

    @media (min-width: 1119px) {
        column-count: ${props => props.error ? 1 : 5};
    }
`;