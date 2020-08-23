import styled from 'styled-components';

export const PhotoInfo = styled.div`
	position: absolute;
	bottom: 15px;
    left: 0;
    right: 0;
    top: 15px;
    padding: 20px;
    color: var(--white-color);
    display: flex;
    opacity: 0;
    flex-direction: column;
    justify-content: flex-end;
    pointer-events: none;
    background-color: rgba(29, 29, 29, .4);
    transition: all .3s linear;
    border-radius: 10px;

	h1 {
		font-size: 18px;
        margin: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
	}

	p {
		font-size: 14px;
        margin: 0;
        margin-top: 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
	}
`;

export const SinglePhoto = styled.div`
    break-inside: avoid;
    position: relative;
    box-sizing: border-box;
    padding: 15px 0;

    img {
        vertical-align: middle;
        object-fit: cover;
        width: 100%;
        height: 100%;
        box-shadow: 0px 4px 13px 2px rgba(0, 0, 0, .1);
        border-radius: 10px;
    }

    &:hover ${PhotoInfo} {
        opacity: 1;
        pointer-events: all;
    }
`;