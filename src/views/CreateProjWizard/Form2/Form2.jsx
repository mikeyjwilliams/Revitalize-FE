import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import states from '../../../assets/CreateProjWizard/stateList';

const Form2 = ({ address, city, state, zip, handleChanges, setFormPosition }) => {
	const [errors, setErrors] = useState({
		address: false,
		city: false,
		state: false,
		zip: false,
	});

	const nextStep = e => {
		e.preventDefault();

		if (!address.length) {
			setErrors({
				...errors,
				address: true,
			});
		} else if (!city.length) {
			setErrors({
				...errors,
				city: true,
			});
		} else if (!state.length) {
			setErrors({
				...errors,
				state: true,
			});
		} else if (!zip.length || zip.length !== 5) {
			setErrors({
				...errors,
				zip: true,
			});
		} else {
			setFormPosition(3);
		}
	};

	const validateInput = e => {
		if (!e.target.value.length) {
			setErrors({
				...errors,
				[e.target.name]: true,
			});
		} else {
			setErrors({
				...errors,
				[e.target.name]: false,
			});
		}
	};

	return (
		<form onSubmit={nextStep} className="form-2">
			<label htmlFor="projectAddress">
				<h3>Street Address</h3>
			</label>
			<input
				name="address"
				type="text"
				id="projectAddress"
				className={`proj-street-address ${errors.address && `errorBorder`}`}
				value={address}
				onChange={e => {
					handleChanges(e);
					validateInput(e);
				}}
				placeholder="Address"
			/>
			{errors.address && <p className="errorText">Please enter an address</p>}

			<div className="address-details">
				<div className="address-details-city">
					<label htmlFor="projectCity">
						<h3>City</h3>
					</label>
					<input
						name="city"
						type="text"
						id="projectCity"
						className={`proj-city ${errors.city && `errorBorder`}`}
						value={city}
						onChange={e => {
							handleChanges(e);
							validateInput(e);
						}}
						placeholder="City"
					/>
					{errors.city && <p className="errorText">Please enter a city</p>}
				</div>

				<div className="address-details-state">
					<label htmlFor="projectState">
						<h3>State</h3>
					</label>
					<select
						className={`${errors.state && `errorBorder`}`}
						onChange={e => {
							handleChanges(e);
							validateInput(e);
						}}
						name="state"
						id="projectState"
					>
						{states.map((eachState, i) => {
							if (i === 0) {
								if (state) {
									return (
										<option className="default-selected" defaultValue>
											{state}
										</option>
									);
								} else {
									return <option defaultValue disabled>{`State`}</option>;
								}
							}

							return <option>{eachState}</option>;
						})}
					</select>
					{errors.state && <p className="errorText">Please select a state</p>}
				</div>
			</div>
			<div className="address-details-zip">
				<label htmlFor="projectZip">
					<h3>Zip Code</h3>
				</label>
				<input
					name="zip"
					type="number"
					id="projectZip"
					className={`proj-zip ${errors.zip && `errorBorder`}`}
					value={zip}
					onChange={e => {
						handleChanges(e);
						validateInput(e);
					}}
					placeholder="Zip"
				/>
				{errors.zip && <p className="errorText">Please enter a valid zip code</p>}
			</div>
			<div className="form-navigation">
				<button type="submit" className="next-step next-step2">
					Next&nbsp;
					<FaArrowRight />
				</button>
				<button className="prev-step prev-step2" onClick={() => setFormPosition(1)}>
					<FaArrowLeft />
					&nbsp;Previous
				</button>
			</div>
		</form>
	);
};

export default Form2;
