import React from 'react';
import * as rtl from '@testing-library/react';
import Dashboard from './Dashboard';
import { client } from "../../config/apollo";
import '@testing-library/jest-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ApolloProvider, withApollo } from 'react-apollo';
import { getByText, fireEvent } from '@testing-library/react';


afterEach(() => {
	rtl.cleanup
});

test('Renders text correctly', () => {
    const container = rtl.render(
		<Router>
			<ApolloProvider client={client}>
				<Dashboard />
			</ApolloProvider>
		</Router>, 
	);

	expect(container).toBeTruthy()
});