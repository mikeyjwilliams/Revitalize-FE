import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import AddTrade from "../AddTrade/AddTrade";

import { FaPlusCircle } from 'react-icons/fa';
// Components
import Tab from './TabComponent/Tab';
import Task from "./TasksComponent/Task";
import People from './People/People';
import PeopleHeader from './People/PeopleHeader';
import Trades from './Trades/Trades';
import TradesHeader from './Trades/TradesHeader';
import Analytics from './Analytics/Analytics';
import NoContent from './NoContent/NoContent';


import { CREATE_PROJECT_TRADE } from '../../../../graphql/mutations';

import { GET_PROJECT_BY_ID } from '../../../../graphql/queries';
import { useMutation, useQuery } from '@apollo/react-hooks';

// Helpers
// import { inLastWeek } from "../../../../helpers/helpers";
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

const MainProjectAdmin = props => {
	const { project, mainTabs, setMainTabs, setAddTaskModal, dashNavTabState, possibleDashNavTabs, refetch } = props;
	// Moving away from managing any tab information anywhere other than in dashboard.
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

	const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
		variables: { id: project.id },
	});

	useEffect(() => {
		data && setProjectData(data.projectById);
	}, [data]);

	const submitAddTrade = async event => {
		event.preventDefault();

		await createProjectTrade({ variables: { data: addTradeState } });

		// setAddTradeState({ ...addTradeState, project: '', name: '', description: '' });
		setAddTradeModal({ show: false });
	};

	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.projectAdminTabs[0],
		});
	}, []);

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

	const projectAdminMainView = selectedTabView => {
		let viewSelected = '';

		if (selectedTabView === mainTabs.projectAdminTabs[0]) {
			// Applicants
			const view = (
				<>
					{project.applicants.length === 0 ? (
						<NoContent message="No Applicants" />
					) : (
						<PeopleHeader
							mainTabs={mainTabs}
							selectedMainTab={mainTabs.selectedMainTab}
							dashNavTabState={dashNavTabState}
							possibleDashNavTabs={possibleDashNavTabs}
						/>
					)}
					{project.applicants.map(applicant => (
						<section className="list applicants" key={applicant.profile.id + Date.now()}>
							<People
								refetch={refetch}
								person={applicant}
								mainTabs={mainTabs}
								selectedMainTab={mainTabs.selectedMainTab}
								project={project}
								dashNavTabState={dashNavTabState}
								possibleDashNavTabs={possibleDashNavTabs}
							/>
						</section>
					))}
				</>
			);
			return (viewSelected = view);
		}

		if (selectedTabView === mainTabs.projectAdminTabs[1]) {
			// Students
			const view = (
				<>
					{project.students.length === 0 ? (
						<NoContent message="No Students" />
					) : (
						<PeopleHeader
							mainTabs={mainTabs}
							selectedMainTab={mainTabs.selectedMainTab}
							dashNavTabState={dashNavTabState}
							possibleDashNavTabs={possibleDashNavTabs}
						/>
					)}
					{project.students.map(student => (
						<section className="list students" key={student.profile.id + Date.now()}>
							<People
								person={student}
								mainTabs={mainTabs}
								selectedMainTab={mainTabs.selectedMainTab}
								project={project}
								dashNavTabState={dashNavTabState}
								possibleDashNavTabs={possibleDashNavTabs}
							/>
						</section>
					))}
				</>
			);
			return (viewSelected = view);
		}

		if (selectedTabView === mainTabs.projectAdminTabs[2]) {
			// Trade Masters
			const view = (
				<>
					{project.tradeMasters.length === 0 ? (
						<NoContent message="No Trade Masters" />
					) : (
						<PeopleHeader
							mainTabs={mainTabs}
							selectedMainTab={mainTabs.selectedMainTab}
							dashNavTabState={dashNavTabState}
							possibleDashNavTabs={possibleDashNavTabs}
						/>
					)}
					{project.tradeMasters.map(trademaster => (
						<section className="list trade-masters" key={trademaster.profile.id + Date.now()}>
							<People
								person={trademaster}
								mainTabs={mainTabs}
								selectedMainTab={mainTabs.selectedMainTab}
								project={project}
								dashNavTabState={dashNavTabState}
								possibleDashNavTabs={possibleDashNavTabs}
							/>
						</section>
					))}
				</>
			);
			return (viewSelected = view);
		}

		if (selectedTabView === mainTabs.projectAdminTabs[3]) {
			// Trades
			const view = (
				<>
					{project.trades.length === 0 ? <NoContent message="No Trades" /> : <TradesHeader />}
					{project.trades.map(trade => (
						<div className="list trades" key={trade.id + Date.now()}>
							<Trades
								trade={trade}
								tab={mainTabs.selectedMainTab}
								project={project}
								setAddTaskModal={setAddTaskModal}

							/>
						</div>
					))}
					<div className="list trades">
						<div className="add-trade-title">Add Trade <FaPlusCircle className="add-trade-plus"  onClick={() => setAddTradeModal({ show: true})} /></div>

					</div>
					{project.tasks.map(task => (
							<div className="list tasks">
								<Task task={task} tab={mainTabs.selectedMainTab} mainTabs={mainTabs} project={project}  />
							</div>
						))
					}
				</>
			);
			return (viewSelected = view);
		}

		if (selectedTabView === mainTabs.projectAdminTabs[4]) {
			// Analytics
			const view = (
				<div className="analytics">
					<Analytics tab={mainTabs.selectedMainTab} project={project} />
				</div>
			);
			return (viewSelected = view);
		}

		return <>{viewSelected}</>;
	};

	if (!mainTabs) {
		return <LoadingSpinner />;
	}

	return (
		<section className="dashboard-main  section  project-admin ">
			<div className="dashboard-section-inner-container">
				<div className="dashboard-title">
					<div className="tabs">
						{mainTabs ? (
							mainTabs.projectAdminTabs.map(tab => (
								<Tab mainTabs={mainTabs} setMainTabs={setMainTabs} tab={tab} key={tab + Date.now()} />
							))
						) : (
							<>
								<Skeleton count={1} height={25} width={200} />
								<Skeleton count={1} height={25} width={200} />
								<Skeleton count={1} height={25} width={200} />
								<Skeleton count={1} height={25} width={200} />
							</>
						)}
					</div>
				</div>

				<hr />
				<div className="dashboard-main-body">{projectAdminMainView(mainTabs.selectedMainTab)}</div>
			</div>
		</section>
	);
};

export default MainProjectAdmin;
