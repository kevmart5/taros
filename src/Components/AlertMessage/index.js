import React from 'react';
import Container from '@material-ui/core/Container';
import './styles.css';

const AlertMessage = ({ error, message }) => {
	return (
		<Container maxWidth='lg'>
			{error ? (
				<div className='error-message--container'>
					<p>{message}</p>
				</div>
			) : (
				<div className='success-message--container'>
					<p>{message}</p>
				</div>
			)}
		</Container>
	);
};

export default AlertMessage;
