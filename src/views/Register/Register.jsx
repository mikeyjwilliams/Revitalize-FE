import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../../graphql/mutations';
import { withRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import googleLogo from '../../assets/AuthPages/Google.png';
import fbLogo from '../../assets/AuthPages/fb-logo.png';
import SetupProfile from '../SetupProfile/SetupProfile';

const Register = props => {
	const [createUser] = useMutation(CREATE_USER);

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

		const created = await createUser({ variables: { data: state } });
		setState({ ...state, password: '' });
		localStorage.setItem('token', created.data.createUser.token);

		setForm({ toggleForm: true });
	};

	const goBack = () => props.history.push('/login');

	const [form, setForm] = useState({ toggleForm: false });
	const toggleForm = () => setForm({ toggleForm: !state.toggleForm });

	return (
		<>
			{form.toggleForm ? <SetupProfile destination="modal" toggleForm={toggleForm} email={state.email} /> : null}
			<main className="register-container">
				<FaArrowLeft onClick={goBack} className="back-arrow" />
				<div className="register-container-main imgContainer">
					<div className="register-form">
						<div className="register-third-party">
							<div className="login-card">
								<div className="register-welcome">
									<h1>Get Started!</h1>
								</div>
								<button>
									<div>
										<a
											className="register-button"
											href={`${process.env.REACT_APP_OAUTH_GOOGLE_LINK}`}
										>
											<img src={googleLogo} alt="Google logo" />
											<h2>Register With Google</h2>
										</a>
									</div>
								</button>
								<button>
									<div>
										<a
											className="register-button"
											href={`${process.env.REACT_APP_OAUTH_FACEBOOK_LINK}`}
										>
											<img src={fbLogo} alt="Facebook logo" />
											<h2>Register With Facebook</h2>
										</a>
									</div>
								</button>

								<div className="register-middle">
									<div className="register-Line"></div>
									<p>or</p>
									<div className="register-Line"></div>
								</div>
								<form className="register-local" onSubmit={handleSubmit}>
									<label htmlFor="email-register">
										<p className="register-title">Email</p>
									</label>
									<input
										id="email-register"
										name="email"
										type="email"
										placeholder="Email..."
										value={state.email}
										onChange={handleChanges}
									/>
									<div className="register-pass">
										<label htmlFor="password-register">
											<p className="">Password</p>
										</label>
										<span className="">Forgot Password?</span>
									</div>
									<input
										id="password-register"
										name="password"
										type="password"
										placeholder="Password..."
										value={state.password}
										onChange={handleChanges}
									/>
									<div className="register-mid">
										<p>
											Already have an acount?{' '}
											<Link to="/login" style={{ textDecoration: `underline` }}>
												Log in
											</Link>
										</p>
									</div>
									<button>Register</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default withRouter(Register);
