import React from 'react';

// Components
import Logo from '../Logo/Logo';
import Search from './Search/Search';
import Button from '../UI/Button/Button';

// Styles
import { Header } from './Header.css';

const header = props => (
	<Header>
		<Logo />
		<Search
			search={props.search}
			change={props.change}
			searchValue={props.searchValue}
            emptySearchValue={props.emptySearchValue}
            allLoaded={props.allLoaded}
		/>
		<Button primary>Log <span>in</span></Button>
	</Header>
);

export default React.memo(header);