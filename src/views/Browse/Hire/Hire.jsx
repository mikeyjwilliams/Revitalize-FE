import React from 'react';

import Company from './Company/Company';
// image import

import menWorking from '../../../assets/BrowsePage/men-working.jpg';
import electrician from '../../../assets/BrowsePage/electrician.jpg';
import carpenter from '../../../assets/BrowsePage/carpenter2.jpg';

const Hours = () => {
	return (
		<section className="hireContainer">
			<h4>Put in Your Hours With Revitalize!</h4>
			<div className="companies">
				<img className="companyContainer1" src={menWorking} alt="tradesmen and apprentice working on a job" />
				<img className="companyContainer" src={electrician} alt="tradesmen working on an electric pole" />
				<img className="companyContainer" src={carpenter} alt="tradesman and apprentice working on project" />
			</div>
		</section>
	);
};

export default Hours;
