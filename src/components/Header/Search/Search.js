import React, { useRef } from 'react';

// Components
import Button from '../../UI/Button/Button';
import SearchIcon from './SearchIcon/SearchIcon';

// Styles
import { Form, Input, EmptySearch } from './Search.css';

const Search = props => {
    const input = useRef('');

    const formSubmitHandler = e => {
        e.preventDefault();
    }

    return (
		<Form onSubmit={formSubmitHandler}>
            <Input
				ref={input}
				type="text"
				placeholder="Search photos"
				onChange={props.change}
                value={props.searchValue || ''}
                autoComplete="off"
                spellCheck="false"
                disabled={props.allLoaded} />
			<Button type="submit" onClick={props.search}>
				<SearchIcon />
			</Button>
            <EmptySearch hasText={input.current.value} onClick={props.emptySearchValue.bind(null, input)}>X</EmptySearch>
		</Form>
	);
};

export default React.memo(Search);