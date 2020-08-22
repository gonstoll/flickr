import React, { useRef, useEffect } from 'react';

// Components
import Button from '../../UI/Button/Button';

// Styles
import { Form, Input } from './Search.css';

const Search = props => {
    const input = useRef('');

    useEffect(() => {
        input.current = input.current.value;
    }, [input]);

    const inputChangeHandler = (e) => {
        input.current = e.target.value;
    };

    const formSubmitHandler = e => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={formSubmitHandler}>
            <Input ref={input} type="text" placeholder="Search photos" onChange={inputChangeHandler} />
            <Button type="submit" onClick={props.search.bind(this, input)}>
                <svg
                    version="1.1"
                    viewBox="0 0 32 32"
                    aria-hidden="false">
                    <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z"></path>
                </svg>
            </Button>
        </Form>
    );
};

export default Search;