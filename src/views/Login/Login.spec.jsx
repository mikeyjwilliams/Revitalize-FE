import React from 'react';
import * as rtl from '@testing-library/react';
import Login from './Login';
import { client } from '../../config/apollo';
import '@testing-library/jest-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ApolloProvider, withApollo } from 'react-apollo';
import { getByText, fireEvent } from '@testing-library/react';

let container = null;

beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	// container *must* be attached to document so events work correctly.
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
	rtl.cleanup;
});

test('Renders text correctly', () => {
	act(() => {
		render(
			<Router>
				<ApolloProvider client={client}>
					<Login />
				</ApolloProvider>
			</Router>,
			container,
		);
	});

	expect(container).toHaveTextContent('Welcome Back!');
});

it("checks button's content", () => {
	const onChange = jest.fn();
	act(() => {
		render(
			<Router>
				<ApolloProvider client={client}>
					<Login />
				</ApolloProvider>
			</Router>,
			container,
		);
	});

	// get ahold of the button element, and trigger some clicks on it
	const button = document.querySelector('[data-testid=toggle]');

	act(() => {
		button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
	});

	expect(button).toHaveTextContent('Log In');
});

it('checks placeholder text', () => {
	act(() => {
		render(
			<Router>
				<ApolloProvider client={client}>
					<Login />
				</ApolloProvider>
			</Router>,
			container,
		);
	});

	const input = document.querySelector('[data-testid=email]');

	expect(input.hasAttribute('placeholder')).toEqual(true);
});

it('changes value when clicked', async () => {
	act(() => {
		render(
			<Router>
				<ApolloProvider client={client}>
					<Login />
				</ApolloProvider>
			</Router>,
			container,
		);
	});

	const h5 = document.querySelector('[data-testid=h5]');

	expect(h5).toHaveTextContent('Sign In With Facebook');
});

it('checks input for password', async () => {
	const handleChanges = jest.fn();
	act(() => {
		render(
			<Router>
				<ApolloProvider handleChanges={handleChanges} client={client}>
					<Login />
				</ApolloProvider>
			</Router>,
			container,
		);
	});

	// get ahold of the button element, and trigger some clicks on it
	const password = document.querySelector('[data-testid=password]');

	act(() => {
		fireEvent.change(password, { target: { value: 'hello' } });
	});
	expect(password).toHaveValue('hello');
	expect(password.hasAttribute('placeholder')).toBeTruthy();

	// fireEvent.change(getByText(password), {
	// 	target: {
	// 	  text: new Text('hello', { type: 'string' })
	// },

	expect(handleChanges).toHaveBeenCalledTimes(0);
});

it('go back', async () => {
	const goBack = jest.fn();
	act(() => {
		render(
			<Router>
				<ApolloProvider goBack={goBack} client={client}>
					<Login />
				</ApolloProvider>
			</Router>,
			container,
		);
	});

	// get ahold of the button element, and trigger some clicks on it
	const arrow = document.querySelector('[data-testid=backArrow]');

	act(() => {
		fireEvent.click(arrow);
	});

	expect(goBack).toHaveBeenCalledTimes(0);
});
