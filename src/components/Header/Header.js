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
        <Search search={props.search} />
        <Button primary>Log in</Button>
    </Header>
);

export default header;