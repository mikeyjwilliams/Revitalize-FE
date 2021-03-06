import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Routes
import LandingPage from './views/Landing/LandingPage';
import Register from './views/Register/Register';
import SetupProfile from './views/SetupProfile/SetupProfile';
import Login from './views/Login/Login';

import Browse from './views/Browse/Browse';
import BrowseAll from './views/BrowseAll/BrowseAll';
import Dashboard from './views/DashboardV2/Dashboard';
import CreateProjectWizard from './views/CreateProjWizard/CreateProjectWizard';
import ProjectPage from './views/ProjectPage/ProjectPage';
import ProjectDonationPage from './views/ProjectDonationPage/ProjectDonationPage';
import About from './views/About/About';
import FAQ from './views/FAQ/FAQ';
import Team from './views/About/Team/Team/Team';

import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';

// Utils
import AuthenticateUser from './utils/AuthenticateUser';

import StudentApplicationForm from './views/StudentApplicationForm/StudentApplicationForm';

export const Routes = () => {
	const [navSelect, setNavSelect] = useState({clicked:false}); //this is used to track where the user is clicking to change behavior in the display.

	return (
		<BrowserRouter>
			<div className="page-container"> {/* this was added to help debug footer */}

				<div className={`nav-${navSelect.clicked ? 'on':'off'}`}>  {/*This is used to turn off nav when not needed*/}
					<Nav navSelect={navSelect} setNavSelect={setNavSelect} />
				</div>
				<Switch> {/* Add components here.. this will swap out anything in the body of the app.. Nav and Footer will be static
					unless we make a new Router File.*/}
					{/* public routes */}
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/oauth/:token" component={AuthenticateUser} />
					<Route exact path="/about" component={About} />

					{/* private routes */}
					<Route
						// exact
						path="/dashboard"
						component={Dashboard}
					/>
					<Route
						// exact
						path="/settings"
						render={() => <SetupProfile destination="settings" />}
					/>

					{/* Project routes */}
					<Route exact path="/project/:slug" component={ProjectPage} />
					<Route exact path="/project/donate/:id" component={ProjectDonationPage} />
					<Route path="/createproject" component={CreateProjectWizard} />
					<Route path="/projects" component={Browse} />
					<Route path="/all-projects" component={BrowseAll} />
					<Route
						exact
						path="/project/:name/studentapplicationform"
						render={props => <StudentApplicationForm {...props} />}
					/>
					<Route exact path="/team" component={Team} />
					<Route exact path="/faq" component={FAQ} />
				</Switch>

			</div>
			<Footer />

		</BrowserRouter>
	);
};
