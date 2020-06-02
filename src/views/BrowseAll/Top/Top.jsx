import React from 'react';
import { Link } from 'react-router-dom';

const Top = props => {
	const { queryFormState, submitQuery, setQueryFormState } = props;

	return (
		<div className="top-container browse-all">
			<label htmlFor="filter-label">
				<h2 className="title">Filter Projects</h2>
			</label>
			<form onSubmit={submitQuery}>
				<input
					id="filter-label"
					className="project-filter"
					name="query"
					type="text"
					placeholder="What you are looking for..."
					value={queryFormState.query}
					onChange={event => {
						setQueryFormState({ query: event.target.value });
					}}
				/>
				<button className="filter-btn" onClick={submitQuery}>
					Submit
				</button>
			</form>
			<div className="interests">
				<div className="interests-left">
					<Link to="/all-projects" className="interest one">
						<div className="inner-interest">Electrical</div>
					</Link>
					<div className="interest two">Carpentry</div>
					<div className="interest three">Interior Design</div>
				</div>
				<div className="interests-right">
					<div className="interest four">HVAC</div>
					<div className="interest five">Plumbing</div>
					<div className="interest six">Masonry</div>
				</div>
			</div>
		</div>
	);
};

export default Top;
