import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// GQL
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../graphql/mutations';

// Images
import googleLogo from '../../assets/AuthPages/Google.png';
import fbLogo from '../../assets/AuthPages/fb-logo.png';

const Login = props => {
	const [loginUser] = useMutation(LOGIN_USER);
	// console.log(client)
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	const handleChanges = event => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async event => {
		event.preventDefault();
		localStorage.setItem('token', '');
		// await client.resetStore();
		const created = await loginUser({ variables: { data: state } });
		setState({
			email: '',
			password: '',
		});
		localStorage.setItem('token', created.data.loginUser.token);
		props.history.push('/projects');
	};

	const goBack = () => {
		props.history.push('/');
	};

	return (
		<>
			<main className="login-container">
				<FaArrowLeft onClick={goBack} className="back-arrow" />

				<div className="login-container-main imgContainer">
					<div className="login-form">
						<div className="login-third-party">
							<div className="login-card">
								<div className="login-welcome">
									<h1>Welcome Back!</h1>
								</div>
								<button>
									<div>
										<a className="login-button" href={`${process.env.REACT_APP_OAUTH_GOOGLE_LINK}`}>
											<img src={googleLogo} alt="Google logo" />
											<h2>Sign In With Google</h2>
										</a>
									</div>
								</button>
								<button>
									<div>
										<a
											className="login-button"
											href={`${process.env.REACT_APP_OAUTH_FACEBOOK_LINK}`}
										>
											<img src={fbLogo} alt="Facebook logo" />
											<h5 data-testid="h5">Sign In With Facebook</h5>
										</a>
									</div>
								</button>

								<div className="login-middle">
									<div className="login-line"></div>
									<p>or</p>
									<div className="login-line"></div>
								</div>
								<form className="login-local" onSubmit={handleSubmit}>
									<p className="login-title">Email</p>
									<input
										data-testid="email"
										name="email"
										type="email"
										placeholder="Email..."
										value={state.email}
										onChange={handleChanges}
									/>
									<div className="login-pass">
										<label htmlFor="password-login">
											<p className="">Password</p>
										</label>
										{/* <span className="">Forgot Password?</span> */}
									</div>
									<input
										data-testid="password"
										name="password"
										type="password"
										placeholder="Password..."
										value={state.password}
										onChange={handleChanges}
									/>
									<div className="login-mid">
										<p>
											Don't have an account?{' '}
											<Link to="/register" style={{ textDecoration: `underline` }}>
												Create One
											</Link>
										</p>
									</div>
									<button data-testid="toggle">Log In</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="imgContainer"></div> */}
			</main>
		</>
	);
};

export default withRouter(Login);
