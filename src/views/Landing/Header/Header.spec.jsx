import React from 'react';
import { render, cleanup, screen, getByText } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

test('Renders display correctly', () => {
	const container = render(
		<Router>
			<Header />
		</Router>,
	);
});
