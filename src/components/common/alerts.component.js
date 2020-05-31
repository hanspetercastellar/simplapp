import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
function AlertDismissible({ title, children, variant }) {
	const [show, setShow] = useState(true);

	return <Alert variant={variant}>{children}</Alert>;
}

export default AlertDismissible;
