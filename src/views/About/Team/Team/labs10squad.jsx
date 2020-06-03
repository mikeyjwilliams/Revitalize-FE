import React from 'react';

// images
import michaelM from '../../../assets/AboutPage/michaelM.png';
import michaelW from '../../../assets/AboutPage/michaelW.png';
import chase from '../../../assets/AboutPage/chase.png';
import dalton from '../../../assets/AboutPage/Dalton.png';
import jules from '../../../assets/AboutPage/jules.png';
import bryan from '../../../assets/AboutPage/bryan.png';


const Labs10Squad = () => {
	const squad = [
        {
                    name: 'Michael Williams',
                    role: 'Full-Stack Developer',
                    image: `${michaelW}`,
                    background: '#ffb588',
                    bio:
                        'Michael resides south of sunny St. Pete, FL. He enjoys art, playing guitar, and solving problems with code. Michael likes to help out when possible and pair program remote or in person.',
                    github: 'https://github.com/mikeyjwilliams',
                    linkedIn: 'https://www.linkedin.com',
                    twitter: 'https://twitter.com',
                    site: '',
                },
                {
                    name: 'Chase Collins',
                    role: 'Full-Stack Developer',
                    image: `${chase}`,
                    background: '#ffb588',
                    bio:
                        'Chase hails from Colorado. He is married to an amazing wife Alexandria. He enjoys long walks with Maple(the family corgi), rock-climbing, reading and pounding on a keyboard.',
                    github: 'https://github.com/Chase-42',
                    linkedIn: 'https://www.linkedin.com/in/chase-collins42/',
                    twitter: 'https://twitter.com',
                    site: 'https://chase-collins-portfolio.netlify.app/',
                },
                {
                    name: 'Bryan Adams',
                    role: 'Team Lead, Full-Stack Developer',
                    image: `${bryan}`,
                    background: '#ffb588',
                    bio:
                        'Bryan is a team lead and full-stack developer from Utah. Bryan has an amazing wife named Sarah, and a beautiful daughter named Kairi. When Bryan is not coding, you will still find him glued to his chair, playing video games.',
                    github: 'https://github.com/BryanKAdams',
                    linkedIn: 'https://www.linkedin.com/in/chase-collins42/',
                    twitter: 'https://twitter.com',
                    site: '',
                },
                // {
                //     name: 'Dalton Walker',
                //     role: 'Full-Stack Developer',
                //     image: `${dalton}`,
                //     background: '#ffb588',
                //     bio:
                //         'Dalton comes from sunny Orlando, FL. He enjoys slapping the bass, lifting weights and crunching through some code!',
                //     github: 'https://github.com/daltonwalkerdw',
                //     linkedIn: 'https://www.linkedin.com',
                //     twitter: 'https://twitter.com',
                //     site: '',
                // },
                // {
                //     name: 'Michael Martin',
                //     role: 'Full-Stack Developer',
                //     image: `${michaelM}`,
                //     background: '#ffb588',
                //     bio:
                //         'Mike hails from the harsh winters in ole Wisconsin. Besides coding Mike enjoys building computers and dabling in video editing, in general he just loves solving problems.',
                //     github: 'https://github.com/littleonetwo',
                //     linkedIn: 'https://www.linkedin.com',
                //     twitter: 'https://twitter.com',
                //     site: '',
                // },
                // {
                //     name: 'Jules Louis',
                //     role: 'Full-Stack Developer',
                //     image: `${jules}`,
                //     background: '#ffb588',
                //     bio:
                //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                //     github: 'https://github.com/chefboyrdeuce',
                //     linkedIn: 'https://www.linkedin.com/julespl',
                //     twitter: 'https://twitter.com/hustleallday',
                //     site: '',
                // }	
];

return (
    <div className="squad-container">
        <h1 className="title">Meet LabsPT10</h1>
        <div className="grid-container">
            {/* <img
                src="https://res.cloudinary.com/revitalize/image/upload/v1570036130/about%20page/Circle_2019_sc3ml9.svg"
                alt="background circles and year"
            /> */}
            <div className="labs10squad">
                {squad.map((person, index) => (
                    <div className={`person index${index}`} style={{ backgroundColor: `${person.background}` }}>
                        {index !== 13 ? (
                            <>
                                <h2 className="name"> {person.name}</h2>
                                <h3 className="role"> {person.role}</h3>
                                <div className="img-container">
                                    <img src={person.image} alt="person" />
                                </div>
                                <div className="overlay">
                                    <div className="text">{person.bio}</div>
                                    <div className="social">
                                        {person.github && (
                                            <a
                                                href={person.github}
                                                alt="Github"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-github"></i>
                                            </a>
                                        )}
                                        {person.linkedIn && (
                                            <a
                                                href={person.linkedIn}
                                                alt="LinkedIn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        )}
                                        {person.twitter && (
                                            <a
                                                href={person.twitter}
                                                alt="Twitter"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        )}
                                        {person.site && (
                                            <a
                                                href={person.site}
                                                alt="Personal Site"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fa fa-user alt"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Labs10Squad;