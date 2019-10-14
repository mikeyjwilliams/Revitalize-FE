import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

// Routes
import LandingPage from "./views/Landing/LandingPage";
import Register from "./views/Register/Register";
import SetupProfile from "./views/SetupProfile/SetupProfile";
import Login from "./views/Login/Login";
import ProjectsHome from "./views/ProjectsHome/ProjectsHome";  // May be deprecated

// import Start from "./views/Start/Start";
import Browse from "./views/Browse/Browse";
import DashboardOld from "./views/DashboardOld/Dashboard";
import Dashboard from "./views/DashboardV2/Dashboard";
import CreateProjectWizard from './views/CreateProjWizard/CreateProjectWizard'
import ProjectPage from './views/ProjectPage/ProjectPage'
import ProjectDonationPage from './views/ProjectDonationPage/ProjectDonationPage';
import About from './views/About/About';

// Utils
import AuthenticateUser from "./utils/AuthenticateUser";

import StudentApplicationForm from './views/StudentApplicationForm/StudentApplicationForm'



export const Routes = () => {

    return (
        <BrowserRouter>

            {/* public routes */}

            <Route
                exact
                path="/"
                component={LandingPage }
		    />

            <Route
                exact
                path="/register"
                component={Register }
            />

            <Route
                exact
                path="/login"
                component={Login }
            />

            <Route
                exact
                path="/oauth/:token"
                component={AuthenticateUser}
		    />

            <Route
                exact
                path="/about"
                component={About }
            />


            {/* private routes */}

            <Route
                // exact
                path="/dashboard-old"
                component={DashboardOld }
            />


            <Route
                // exact
                path="/dashboard"
                component={Dashboard}

            />

            {/* <Route
                // exact
                path="/profile/setup"
                component={SetupProfile }
            /> */}


            <Route
                // exact
                path="/settings"
                render={() => (
                    <SetupProfile destination="settings" />
                )}
            />


            {/* Project routes */}
            <Route
                path="/projects"
                component={ProjectsHome }
            />


            <Route
                exact
                path="/project/:id"
                component={ProjectPage }
            />



            <Route
                exact
                path="/project/donate/:id"
                component={ProjectDonationPage}
            />

            <Route
                path="/createproject"
                component={CreateProjectWizard }
            />


            <Route
                path="/browse"
                component={Browse }
            />

            <Route 
                exact
                path='/project/:id/studentapplicationform'
                render={() => (
                    <StudentApplicationForm />
                )}
            />

        </BrowserRouter>
    );
}



