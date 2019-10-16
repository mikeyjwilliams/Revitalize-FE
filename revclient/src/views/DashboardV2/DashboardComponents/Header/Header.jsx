import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaComments, FaFileInvoice, FaAngleRight, FaAngleDown, FaAngleUp, FaBan, FaPlus } from "react-icons/fa";
import { GoKebabVertical } from "react-icons/go";

import AddTrade from "./AddTrade/AddTrade";

// Helper functions
import { calculateDueDate } from "../../../../helpers/helpers";

// GQL
import { useMutation } from '@apollo/react-hooks';
import { DELETE_PROJECT } from "../../../../graphql/mutations";


const Header = props => {
	const { city, state, name, description, startDate, duration, id, donations } = props.project;
	const { project, setProject, selectedProject } = props;
	const [ settingsToggle, setSettingsToggle ] = useState({ settingsDropdown: false });
	const [ addTradeModal, setAddTradeModal ] = useState({ show: false })
	const [ deleteProject ] = useMutation( DELETE_PROJECT );
	
	const submitDeleteProject = async () => {
		const deletedProject = await deleteProject({ variables: { id: id } });
		console.log(`${deletedProject} has been deleted.`)
		props.history.push("/dashboard");
	};
	
	
	
	if (addTradeModal.show === true) {
		return (
			<AddTrade setAddTradeModal={setAddTradeModal} addTradeModal={addTradeModal} projectId={id} />
		)
	}

	
	return (
		<>
			<div className="dashboard-header section">
				<div className="header-top">
					{project.isLive ? (
						<div className="project-status started">In Progress</div>
					) : (
						<div className="project-status not-started">Not Started</div>
					)}
					<div className="project-settings">
						<GoKebabVertical onClick={() => setSettingsToggle({ settingsDropdown: !settingsToggle.settingsDropdown })}/>
						{settingsToggle.settingsDropdown ? (
							<div className="project-settings-dropdown">
								<div className="project-settings-dropdown-option add-trade" onClick={() => setAddTradeModal({ show: true })} >
									<FaPlus />&nbsp; Add Project Trade
								</div>
								<div className="project-settings-dropdown-option delete" onClick={submitDeleteProject} >
									<FaBan />&nbsp; Delete Project
								</div>
							</div>
						) : null}
					</div>
				</div>

				<div className="header-middle">
					<div className="header-middle-geo">
						{city}, {state}
					</div>
					<div className="header-middle-title">
						<Link to={`/project/${project.slug}`}>{name}</Link>
					</div>
					<p className="header-middle-description">{description}</p>
				</div>

				<div className="header-bottom">
					<div className="bottom-left">
						<p className="due-date">Due Date: {calculateDueDate(startDate, duration)}</p>
						<div className="bottom-icons">
							<FaComments />
							<FaFileInvoice />
							{!selectedProject.buttonToggle
								?
									<FaAngleDown 
										className="bottom-icon-seemore"
										onClick={() => setProject({ 
											project: project,
											showMore: !selectedProject.showMore, 
											id: selectedProject.id ? null : id, 
											buttonToggle: !selectedProject.buttonToggle, 
										})}
									/>
								: 
									<FaAngleUp 
										className="bottom-icon-seemore"
										onClick={() => setProject({ 
											project: null,
											showMore: !selectedProject.showMore, 
											id: selectedProject.id ? null : id, 
											buttonToggle: !selectedProject.buttonToggle, 
										})}
									/>
							}
							<Link to={`/project/${project.slug}`}>
								<FaAngleRight 
									className="bottom-icon-next"
								/>
							</Link>
						</div>
					</div>
					<div className="team-members">
						<div className="member-icons">
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
							<div className="count">+10</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default withRouter(Header);
