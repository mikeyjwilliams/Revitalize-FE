import React from 'react';
import * as rtl from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CrowdFunding from './CrowdFunding';

describe('Crowdfunding test', () => {
	test('renders correctly', () => {
		const wrapper = rtl.render(
			<Router path="/">
				<CrowdFunding />
			</Router>,
		);
		const { getByTestId } = wrapper;
		expect(getByTestId('login')).toHaveTextContent(/create a project/i);
	});
});
