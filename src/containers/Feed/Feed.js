import React, { useEffect, useState, useRef } from 'react';
import axios from '../../axios';

// Components
import Header from '../../components/Header/Header';
import Photos from '../../components/Photos/Photos';
import Spinner from '../../components/UI/Spinner/Spinner';

// Styles
import { Main } from './Feed.css';

const Feed = () => {
    // State
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState();

    const fetchFeed = async () => {
        setLoading(true);
        try {
            const request = await axios.get('&method=flickr.photos.getRecent&extras=tags,url_c&per_page=70');
            const filteredFeed = request.data.photos.photo.filter(ph => ph.url_c);
            setFeed(filteredFeed);
        } catch (error) {
            setError({
                error: true,
                message: error.message
            });
        }
    };

    useEffect(() => {
        fetchFeed();
    }, []);

    const loadedImages = useRef(0);
	const handleImageLoaded = () => {
        loadedImages.current++;
		if (loadedImages.current === feed.length) {
			setLoading(false);
			loadedImages.current = 0; // Return to original value
		}
    };

    const searchPhotosHandler = async event => {
        event.preventDefault();
        if (!search) return;
        setLoading(true);
        try {
            const request = await axios.get(`&method=flickr.photos.search&tags=${search}&extras=tags,url_c&per_page=70`);
            if (request.data.photos.total === '0') {
                setLoading(false);
                setFeed([]);
                throw new Error('No images found!');
			} else {
                setError(false);
                const filteredFeed = request.data.photos.photo.filter(ph => ph.url_c);
                setFeed(filteredFeed);
            }
        } catch (error) {
            setError({
                error: true,
                message: error.message
            });
        }
    };

    const changeHandler = event => {
		setSearch(event.target.value);
    };

    const emptySearchValue = input => {
        input.current.value = '';
        setSearch('');
        fetchFeed();
    };

    return (
		<>
			<Header
				search={searchPhotosHandler}
				change={changeHandler}
				searchValue={search}
				emptySearchValue={emptySearchValue}
				allLoaded={loading} />
			<Main>
				<Photos
					photos={feed}
					load={handleImageLoaded}
					allLoaded={loading}
					error={error} />
				<Spinner isLoading={loading} />
			</Main>
		</>
	);
};

export default React.memo(Feed);