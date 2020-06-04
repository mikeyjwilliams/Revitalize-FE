import React from 'react';
import * as rtl from '@testing-library/react';
import Form1 from './Form1/Form1';
import Form2 from './Form2/Form2';
import Form3 from './Form3/Form3';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import testLogo from './Capture.JPG';

afterEach(rtl.cleanup);

test('Renders Form 1 correctly', () => {
	const container = rtl.render(
		<Router>
			<Form1 />
		</Router>,
	);
});

test('Renders Form 2 correctly', () => {
	const container = rtl.render(
		<Router>
			<Form2 />
		</Router>,
	);
});

test('Renders Form 3 correctly', () => {
	const container = rtl.render(
		<Router>
			<Form3 	setProjectDetails=""
      	projectDetails=""
      	difficulty=""
      	duration={5}
      	goalAmount={5}
      	handleChanges=""
      	submitForm=""
      	setFormPosition=""
      	 />
		</Router>,
	);
});
