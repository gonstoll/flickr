import React from 'react';

import { Button } from './Button.css';

const button = props => <Button {...props}>{props.children}</Button>;

export default React.memo(button);