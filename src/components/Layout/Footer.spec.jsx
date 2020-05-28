import React from 'react';
import * as rtl from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders footer correctly', () => {
	const container = rtl.render(
		<Router>
			<Footer />
		</Router>,
	);

	const lItems = document.getElementsByTagName('a');

	expect(lItems[0]).toHaveTextContent('About');
	expect(lItems[0].getAttribute('href')).toBe('/about');
	expect(lItems[1]).toHaveTextContent('Create Project');
	expect(lItems[1].getAttribute('href')).toBe('/createproject');
	expect(lItems[2]).toHaveTextContent('Projects');
	expect(lItems[2].getAttribute('href')).toBe('/projects');
	expect(lItems[3]).toHaveTextContent('Team');
	expect(lItems[3].getAttribute('href')).toBe('/team');
	expect(lItems[4].getAttribute('href')).toBe('https://github.com');
	expect(lItems[4].getAttribute('alt')).toBe('Github');
	expect(lItems[5].getAttribute('href')).toBe('https://facebook.com');
	expect(lItems[5].getAttribute('alt')).toBe('Facebook');
	expect(lItems[6].getAttribute('href')).toBe('https://Linkedin.com');
	expect(lItems[6].getAttribute('alt')).toBe('LinkedIn');
	expect(lItems[7].getAttribute('href')).toBe('https://twitter.com');
	expect(lItems[7].getAttribute('alt')).toBe('Twitter');
});

afterEach(rtl.cleanup);
