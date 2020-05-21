import React from 'react';
import * as rtl from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(rtl.cleanup);

test('Renders display correctly', () => {
	const container = rtl.render(
		<Router>
			<Header />
		</Router>,
	);
});
