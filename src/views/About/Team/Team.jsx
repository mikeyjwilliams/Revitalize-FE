import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Team from './Team/Team';
import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';
// import Labs10Squad from './Squad/labs10squad';

const About = () => {
	return (
		<main>
			<Nav />
			<Header />
			{/* <Main /> */}
			<Team />
			{/* <Labs10Squad /> */}
			<Footer />
		</main>
	);
};

export default About;
