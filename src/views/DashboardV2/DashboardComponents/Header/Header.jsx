import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaBan, FaLink } from 'react-icons/fa';
import { GoKebabVertical } from 'react-icons/go';

// Sub components
import AddTrade from "../AddTrade/AddTrade";
import MemberIcons from './MemberIcons/MemberIcons';
import { HeaderSkeleton } from '../Skeleton/HeaderSkeleton';

// Helper functions
import { calculateDueDate } from '../../../../helpers/helpers';

// GQL
import { DELETE_PROJECT } from '../../../../graphql/mutations';
import { CREATE_PROJECT_TRADE } from '../../../../graphql/mutations';

import { useMutation, useQuery } from '@apollo/react-hooks';

import { GET_PROJECT_BY_ID } from '../../../../graphql/queries';

const Header = props => {
	const { project, setProject, selectedProject, type, possibleDashNavTabs, setActionHappened } = props;

	const [settingsToggle, setSettingsToggle] = useState({ settingsDropdown: false });
	const [deleteProject] = useMutation(DELETE_PROJECT);
	const [projectData, setProjectData] = useState(project);

	const [addTradeModal, setAddTradeModal] = useState({ show: false });
	const [addTradeState, setAddTradeState] = useState({
		project: projectData.id,
		name: '',
		description: '',
	});

	const [createProjectTrade] = useMutation(CREATE_PROJECT_TRADE, {
		update(
			cache,
			{
				data: { createProjectTrade },
			},
		) {
			const { projectById } = cache.readQuery({
				query: GET_PROJECT_BY_ID,
				variables: { id: data.projectById.id },
			});
			cache.writeQuery({
				query: GET_PROJECT_BY_ID,
				data: { projectById: projectById.trades.concat([createProjectTrade]) },
			});
		},
	});

	const { loading, error, data, refetch } = useQuery(GET_PROJECT_BY_ID, {
		variables: { id: project.id },
	});


	useEffect(() => {
		console.log("this use effect works")
		if(data){
			setProjectData(data.projectById);
		}
	}, [data]);


	const submitAddTrade = async event => {
		event.preventDefault();

		await createProjectTrade({ variables: { data: addTradeState } });

		setAddTradeModal({ show: false });
	};
	console.log("before delete:", data);
	const submitDeleteProject = async () => {
		await deleteProject({
			variables: { id: projectData.id },
		});

		console.log("inside delete: ", data);
		setActionHappened(true);
		refetch();

	};

	if (loading) return <HeaderSkeleton />;
	if (error) return <h3>Error</h3>;
	if (addTradeModal.show === true) {
		return (
			<AddTrade
				setAddTradeState={setAddTradeState}
				addTradeState={addTradeState}
				submitAddTrade={submitAddTrade}
				setAddTradeModal={setAddTradeModal}
				addTradeModal={addTradeModal}
				projectData={projectData}
			/>
		);
	}

	return (
		<>
			<section className="dashboard-header section"  >
				<div className={`dashboard-section-inner-container  ${selectedProject.showMore ? "show-more" : ""} `}>

					<div className="header-top">
						<div className="header-status">
							<div className="header-left">
								<div className="header-role">
									{type === possibleDashNavTabs[0] ? ( // PROJECT ADMIN
										<div className="project-status">{possibleDashNavTabs[0]}</div>

									) : null}
								</div>
								<br />
								<div className="header-progress">
									{// IF a Project has tradesMaster, student, and trades, it is considered "LIVE"
									projectData.tradeMasters.length > 0 &&
									projectData.students.length > 0 &&
									projectData.trades.length > 0 ? (

										<div className="project-status started">In Progress!</div>
										) : (
											<div className="project-status not-started">Not Started</div>
										)
									}
								</div>
								<br />
								<p className="due-date">Due Date: {calculateDueDate(projectData.startDate, projectData.duration)}</p>
							</div>
						</div>
						<div className="header-top-center">
							<div className="header-project-title">
								<Link to={`/project/${projectData.slug}`}>
									{projectData.name} &nbsp;
									<FaLink />
								</Link>
							</div>
							{projectData.city}, {projectData.state}
							<p className="header-project-description">{projectData.description}</p>
						</div>
						<div className="header-top-right">
							{/*(type === possibleDashNavTabs[1]) ? null : ( // Don't render add task for student
								<div className="add-tasks">
									<div className="add-task-title">Add Task</div>
									<FaPlusCircle className="add-task-button"  onClick={() => setAddTaskModal({ show: true, selectedProject: projectData })} />
								</div>
							) */}
							{(type === possibleDashNavTabs[0]) ? (  // Only PROJECT ADMIN can add trades or delete the project. If we have more items for the kebab, we can adjust this logic
								<div className="project-settings">
									<GoKebabVertical
										onClick={() =>
											setSettingsToggle({ settingsDropdown: !settingsToggle.settingsDropdown })
										}
									/>
									{(settingsToggle.settingsDropdown && type === possibleDashNavTabs[0]) ? (   // Only PROJECT ADMIN; Rendundant, but built to be added to
										<div className="project-settings-dropdown">

											<div
												className="project-settings-dropdown-option delete"
												onClick={submitDeleteProject}
											>
												<FaBan />
												&nbsp; Delete Project
											</div>
										</div>
									) : null}
								</div>
							) : null }
						</div>
					</div>

					<div className="header-middle">
						<div className="header-middle-geo">

						</div>
						<div className="header-middle-title">

						</div>

					</div>

					<div className="header-bottom">
						<div className="bottom-left">

						</div>

						<div className="bottom-icons">
							{!selectedProject.buttonToggle ? (

								<div className="manage-project-button-container"  onClick={() => {
									setProject({
										project: project,
										showMore: !selectedProject.showMore,
										id: selectedProject.id ? null : projectData.id,
										buttonToggle: !selectedProject.buttonToggle,
									})}}
								>
									<p  className="bottom-button manage" >Manage</p>
									<FaAngleDown className="bottom-button arrow" />
								</div>

							) : (

								<div className="manage-project-button-container" onClick={() => {
									setProject({
										project: null,
										showMore: !selectedProject.showMore,
										id: selectedProject.id ? null : projectData.id,
										buttonToggle: !selectedProject.buttonToggle,
									})}}
								>
									<p  className="bottom-button close" >Close</p>
									<FaAngleUp className="bottom-button arrow" />
								</div>
							)}
						</div>

						<div className="team-members">
							<div className="member-icons">
								{type === possibleDashNavTabs[0]
								|| type === possibleDashNavTabs[1]
								|| type === possibleDashNavTabs[2]
								? (
									<MemberIcons
										arrayOfUsers={projectData.students} // Should work for student view, but not tested yet
									/>
								) : (
									<>
										<p>Team</p>
										<img
											src="https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
											alt="team member"
											className="dashboard-picture-icons"
										/>
										<img
											src="https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
											alt="team member 2"
											className="dashboard-picture-icons"
										/>
										<div className="count">{`${
											projectData.students ? projectData.students.length : '?'
										}`}</div>
									</>
								)}
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	);
};

export default withRouter(Header);
