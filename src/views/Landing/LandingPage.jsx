/**
 * * Description of component
 * TODO: things to do
 * @props description
 */
import React from 'react';

import Header from './Header/Header';
import ProjectSpotlight from './ProjectSpotlight/ProjectSpotlight';
// import SearchProjects from './SearchProjects/SearchProjects';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import CrowdFunding from './CrowdFunding/CrowdFunding';

class LandingPage extends React.Component {
	render() {
		return (
			<>

				<main className="landing">
					<Header />
					<CrowdFunding />
					<ProjectSpotlight />
					<FeaturedProjects />

				</main>

			</>
		);
	}
}


export default LandingPage;
