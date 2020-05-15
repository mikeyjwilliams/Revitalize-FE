import React, { useState } from 'react';

import Theatre from '../../../assets/LandingPage/Theatre.svg';

const ProjectSpotlight = () => {
	const initStory =
		'Come see the journey of our students and industry experts restore an abandoned theatre to a modern state-of-the-art career school. The new school year will be starting Fall of 2020.';

	const [projectTitle] = useState('Alger Theatre - Detroit, MI');
	const [projectStory] = useState(initStory);

	return (
		<section className="project-spotlight-container">
			<h2 className="section-title">Project Spotlight</h2>
			<div className="project-spotlight-content">

				<div className="project-spotlight">
					<div className="user-image">
						<img className="user-photo" src={Theatre} alt="Alger-Theater" />
					</div>
					<div className="user-details">
						<h3 className="user-info">{projectTitle}</h3>
						<p>{projectStory}</p>
					</div>

				</div>
			</div>
		</section>
	);
};

export default ProjectSpotlight;
