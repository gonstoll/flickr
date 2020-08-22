import React, { useEffect, useState, useRef } from 'react';
import axios from '../../axios';

// Components
import Main from '../../components/UI/Layout/Layout';
import Header from '../../components/Header/Header';
import Photos from '../../components/Photos/Photos';
import Spinner from '../../components/UI/Spinner/Spinner';

const Feed = () => {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFeed = async () => {
        try {
            const request = await axios.get('&method=flickr.photos.getRecent&extras=tags,url_l&per_page=50');
            setFeed(request.data.photos.photo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
		fetchFeed();
	}, []);

    const photosWithUrl = feed.filter(ph => ph.url_l);

    const loadedImages = useRef(0);
    const handleImageLoaded = () => {
        loadedImages.current++;
        if (loadedImages.current === photosWithUrl.length) {
            setLoading(false);
            loadedImages.current = 0; // Return to original value
		}
    };

    const searchPhotosHandler = async (value, ev) => {
        ev.preventDefault();
        setLoading(true);
        try {
            const request = await axios.get(`&method=flickr.photos.search&tags=${value.current}&extras=tags,url_l&per_page=50`);
            if (request.data.photos.total === '0') {
                throw new Error('No images found!');
            } else {
                setFeed(request.data.photos.photo);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header search={searchPhotosHandler} />
            <Main>
                <Photos photos={photosWithUrl} load={handleImageLoaded} loading={loading} />
                <Spinner isLoading={loading} />
            </Main>
        </>
	);
};

export default Feed;