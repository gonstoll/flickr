import React from 'react';

import { Container, Div } from './Spinner.css';

const spinner = props => (
	<Container isLoading={props.isLoading}>
		<Div />
	</Container>
);

export default spinner;