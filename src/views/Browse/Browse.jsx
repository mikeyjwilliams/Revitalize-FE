import React from 'react';

import Top from './Top/Top';
import Spotlight from './Spotlight/Spotlight';
import RecommendedProjects from './RecommendedProjects/RecommendedProjects';
import NearYou from './NearYou/NearYou';
import CreateProject from './CreateProject/CreateProject';
import Noteworthy from './Noteworthy/Noteworthy';
import Hire from './Hire/Hire';

const Start = () => {
	return (
		<>

			<main className="browse-container">
				<Top />
				<Spotlight />
				<RecommendedProjects />
				<CreateProject />
				<NearYou />
				<Hire />
				<Noteworthy />
			</main>

		</>
	);
};

export default Start;
