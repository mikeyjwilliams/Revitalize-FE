import React from 'react';
import * as rtl from '@testing-library/react';
import Login from './Login';
import { client } from '../../config/apollo';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ApolloProvider, withApollo } from 'react-apollo';

afterEach(rtl.cleanup);

test('Renders display correctly', () => {
	const { container, getByText } = rtl.render(
		<Router>
			<ApolloProvider client={client}>
				<Login />
			</ApolloProvider>
		</Router>,
	);

	const h2 = document.querySelectorAll('h2');

	// expect(getByText('Welcome Back!')).toBeInTheDocument()
	expect(container.firstChild).toHaveTextContent('Welcome Back!');
});
