import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

// Helpers
import { addWeeksDueDate, formatDateForDateInput, formatDateForMutation } from '../../../../helpers/helpers';

// Gql
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_PROJECT_TASK } from '../../../../graphql/mutations';
import { GET_PROJECT_BY_ID } from '../../../../graphql/queries';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

const AddTask = props => {
	const { setAddTaskModal, selectedProject, trade, refetch } = props;

	const [addTaskState, setAddTaskState] = useState({
		project: '',
		trade: trade ? trade.id : '',
		title: '',
		description: '',
		priority: '',
		dueDate: formatDateForDateInput(Date.now()),
		budgetHours: '',
	});

	const { loading, error, data,} = useQuery(GET_PROJECT_BY_ID, {
		variables: { id: selectedProject.id },
	});

	const [createProjectTask] = useMutation(CREATE_PROJECT_TASK, {
		update(cache, { data: { createProjectTask } }) {
			const { projectById } = cache.readQuery({
				query: GET_PROJECT_BY_ID,
				variables: { id: data.projectById.id },
			});
			cache.writeQuery({
				query: GET_PROJECT_BY_ID,
				data: { projectById: projectById.tasks.concat([createProjectTask]) },
			});
		},

	});

	useEffect(() => {
		selectedProject && setAddTaskState({ ...addTaskState, project: selectedProject.id });
	}, [selectedProject]);

	const submitAddTask = async event => {
		event.preventDefault();

		await createProjectTask({
			variables: {
				data: {
					...addTaskState,
					budgetHours: Number(addTaskState.budgetHours),
					dueDate: formatDateForMutation(addTaskState.dueDate),
				},

			},

		});

		setAddTaskState({
			...addTaskState,
			project: '',
			trade: '',
			title: '',
			description: '',
			priority: '',
			dueDate: '',
			budgetHours: '',
		});
		setAddTaskModal({ show: false });
		refetch()
	};

	if (loading) return <LoadingSpinner />;
	if (error) {

		return <LoadingSpinner />;

	}

	

	return (
		<>
			<section className="add-task-container">
				<div className="add-task-card">
					<div className="add-task-actions">
						<MdClose className="close" onClick={() => setAddTaskModal({ show: false })} />
					</div>

					{trade ? <h1>Add Task for {trade.name}</h1> : <h1>Add Task</h1>}

					<form onSubmit={submitAddTask}>
						<div className="add-task-input-container">
							<label htmlFor="title--add-task">
								<h5 className="add-task-input-label">Title</h5>
							</label>
							<input
								id="title--add-task"
								name="title"
								type="text"
								placeholder="Title..."
								value={addTaskState.title}
								onChange={event =>
									setAddTaskState({ ...addTaskState, [event.target.name]: event.target.value })
								}
							/>
						</div>

						<div className="add-task-input-container">
							<label htmlFor="trade--add-task">
								<h5 className="add-task-input-label">Trade</h5>
							</label>
							{trade ? (
								<input
									id="trade--add-task"
									disabled
									name="trade"
									type="text"
									value={trade.name}
									onChange={event =>
										setAddTaskState({ ...addTaskState, [event.target.name]: event.target.value })
									}
								/>
							) : (
								<select
									id="trade--add-task"
									value={addTaskState.trade}
									onChange={event => setAddTaskState({ ...addTaskState, trade: event.target.value })}
								>
									<option value="0">Select trade</option>
									{selectedProject.trades.map(trade => (
										<option key={trade.id} name="trade" value={trade.id}>
											{trade.name}
										</option>
									))}
								</select>
							)}
						</div>

						<div className="add-task-input-container disabled">
							<labe htmlFor="assign-task--add-task">
								<h5 className="add-task-input-label">Assign Task</h5>
							</labe>
							<select
								id="assign-task--add-task"
								disabled
								// value={addTaskState.apprentices.profile}
								value="Coming Soon"
								onChange={event =>
									setAddTaskState({ ...addTaskState, apprentices: { profile: event.target.value } })
								}
							>
								<option value={''}>Select apprentice</option>
								{/* {
                                    selectedProject.students.map(eachStudent => (
                                        <option
                                            name="apprentices"
                                            value={eachStudent.profile.id}
                                        >

                                            {eachStudent.profile.firstName} {eachStudent.profile.lastName}

                                        </option>
                                    ))
                                } */}
							</select>
						</div>

						<div className="add-task-input-container">
							<label htmlFor="priority--add-task">
								<h5 className="add-task-input-label">Priority Level</h5>
							</label>

							<select
								id="priority--add-task"
								value={addTaskState.priority}
								onChange={event => {
									event.target.value === 'LOW'
										? setAddTaskState({
												...addTaskState,
												priority: event.target.value,
												dueDate: formatDateForDateInput(addWeeksDueDate(Date.now(), 4)),
										  })
										: event.target.value === 'MEDIUM'
										? setAddTaskState({
												...addTaskState,
												priority: event.target.value,
												dueDate: formatDateForDateInput(addWeeksDueDate(Date.now(), 2)),
										  })
										: event.target.value === 'HIGH' &&
										  setAddTaskState({
												...addTaskState,
												priority: event.target.value,
												dueDate: formatDateForDateInput(addWeeksDueDate(Date.now(), 1)),
										  });
								}}
							>
								<option value="0">Select priority</option>
								<option name="priority" value="LOW">
									Low priority (4-6 weeks)
								</option>
								<option name="priority" value="MEDIUM">
									Medium priority (2-3 weeks)
								</option>
								<option name="priority" value="HIGH">
									High priority (1-2 weeks)
								</option>
							</select>
						</div>

						<div className="add-task-date-hours-container">
							<div className="add-task-input date">
								<label htmlFor="due-date--add-task">
									<h5 className="add-task-input-label">Due Date</h5>
								</label>
								<input
									id="due-date--add-task"
									name="dueDate"
									type="date"
									value={addTaskState.dueDate}
									onChange={event =>
										setAddTaskState({ ...addTaskState, [event.target.name]: event.target.value })
									}
								/>
							</div>
							<div className="add-task-input hours">
								<label htmlFor="hours--add-task">
									<h5 className="add-task-input-label"># of Hours</h5>
								</label>
								<input
									id="hours--add-task"
									name="budgetHours"
									type="number"
									value={addTaskState.budgetHours}
									onChange={event =>
										setAddTaskState({ ...addTaskState, [event.target.name]: event.target.value })
									}
								/>
							</div>
						</div>

						<div className="add-task-textarea-container">
							<label htmlFor="descrip--add-task">
								<h5 className="add-task-input-label">Description</h5>
							</label>
							<textarea
								id="descrip--add-task"
								name="description"
								type="text"
								placeholder="Describe the task, here."
								value={addTaskState.description}
								onChange={event =>
									setAddTaskState({ ...addTaskState, [event.target.name]: event.target.value })
								}
							/>
						</div>

						<div className="add-task-button-container">
							<button type="submit" className="add-task-button">
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default AddTask;
