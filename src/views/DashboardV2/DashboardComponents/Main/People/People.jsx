import React, { useState, useEffect } from 'react';
// import Toggle from "react-toggle";

// GQL
import { ACCEPT_PROJECT_APPLICANT, DECLINE_PROJECT_APPLICANT } from '../../../../../graphql/mutations';

import { useMutation } from '@apollo/react-hooks';

const People = props => {
	const { project, person, selectedMainTab, mainTabs, refetch } = props;

	const [, setVerified] = useState(false);
	const [acceptProjectApplicant] = useMutation(ACCEPT_PROJECT_APPLICANT);
	const [declineProjectApplicant] = useMutation(DECLINE_PROJECT_APPLICANT);
	const [projectApplicantState, setProjectApplicantState] = useState({
		project: '', // project Id
		profile: '', // Profile ID
		application: '', // Application id?
	});

	useEffect(() => {
		// Check verified
		if (person.profile.verified) return setVerified(true);
		setVerified(false);
	}, []);

	const submitSetStatus = async (status, statusObject) => {
		setProjectApplicantState({
			...projectApplicantState,
			project: project.id,
			profile: person.profile.id,
			application: person.id,
		});
		if (status === 'ACCEPTED') {
			await acceptProjectApplicant({
				variables: {
					data: {
						...projectApplicantState,
						project: project.id,
						profile: person.profile.id,
						application: person.id,
					},
				},
			});
			refetch(); // updates the query and refetch the data. -MW DW
		}
		if (status === 'DECLINED') {
			await declineProjectApplicant({
				variables: {
					data: {
						...projectApplicantState,
						project: project.id,
						profile: person.profile.id,
						application: person.id,
					},
				},
			});
			refetch(); // updates the query and refetch the data. -MW DW
		}

		setProjectApplicantState({ project: '', profile: '', application: '' });
	};

	if (selectedMainTab === mainTabs.projectAdminTabs[0]) {
	}
	return (
		<>
			<div className="people-card-container">
				<div className="people-body">
					{person.profile.profileImage ? (
						<div className="people-img-container">
							<img src={person.profile.profileImage} alt="" />
						</div>
					) : (
						<div className="display-none"></div>
					)}

					<div className="people-profile name">
						<span className="person-status">status: {person.status}</span>
						<h5>
							{person.profile.firstName} {person.profile.lastName}
						</h5>
					</div>

					<div className="people-profile contact">
						<p className="email">{person.profile.email}</p>
						<p className="phone">{person.profile.phone}</p>
					</div>

					<div className="people-profile address">
						<p>{person.profile.address}</p>
						{person.profile.aptNumber ? <p>{person.profile.aptNumber}</p> : null}
						<p>
							{person.profile.city}, {person.profile.state} {person.profile.zip}
						</p>
					</div>

					{selectedMainTab === mainTabs.projectAdminTabs[0] &&
					props.dashNavTabState.selectedDashNavTab === props.possibleDashNavTabs[0] ? ( // If rendering applicants, allow setting status
						<div className="people-profile assign">
							{person.licensed ? <h5>Licensed</h5> : null}
							<button
								className="btn-status"
								type="button"
								value="ACCEPTED"
								onClick={e => {
									let statusObject = {
										...projectApplicantState,
										project: project.id,
										profile: person.profile.id,
										application: person.id,
									};

									submitSetStatus('ACCEPTED', statusObject);
								}}
							>
								Accept
							</button>
							<button
								className="btn-status"
								type="button"
								value="DECLINED"
								onClick={e => {
									let statusObject = {
										...projectApplicantState,
										project: project.id,
										profile: person.profile.id,
										application: person.id,
									};
									// if (event.target.value === 'ACCEPTED') {
									submitSetStatus('DECLINED', statusObject);
									// }
								}}
							>
								Decline
							</button>
						</div>
					) : null}
				</div>
			</div>
		</>
	);
};

export default People;
