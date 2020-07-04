import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

window.alert = function(message) {

};

window.confirm = function(message, fn) {

	<ModalAlert message={message} fn={fn}/>;
};

const ModalAlert = (props) => {

	const { buttonLabel, className, message, fn } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	return (
		<div>
			<Button color="danger" onClick={toggle}>{buttonLabel}</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>{message}</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>Do Something</Button>{' '}
					<Button color="secondary" onClick={toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};
