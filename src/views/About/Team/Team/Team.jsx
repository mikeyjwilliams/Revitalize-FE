import React from 'react';

import kerry from '../../../../assets/AboutPage/kerry.png';
import alex from '../../../../assets/AboutPage/alex.png';
import clark from '../../../../assets/AboutPage/clark.png';
import frank from '../../../../assets/AboutPage/frank.png';
import jose from '../../../../assets/AboutPage/jose2.png';
import omar from '../../../../assets/AboutPage/omar.png';
import ruth from '../../../../assets/AboutPage/ruth.png';
import skyelar from '../../../../assets/AboutPage/skyelar.png';
import anthony from '../../../../assets/AboutPage/anthony.png';
import elan from '../../../../assets/AboutPage/elan.png';
import theia from '../../../../assets/AboutPage/theia.png';
import Lucy from '../../../../assets/AboutPage/Lucy.png';
import michaelM from '../../../../assets/AboutPage/michaelM.png';
import michaelW from '../../../../assets/AboutPage/michaelW.png';
import chase from '../../../../assets/AboutPage/chase.png';
import dalton from '../../../../assets/AboutPage/Dalton.png';
import jules from '../../../../assets/AboutPage/jules.png';
import bryan from '../../../../assets/AboutPage/bryan.png';

const Squad = () => {
	const squad = [
		{
			name: 'Anthony Venturini',
			role: 'CEO/Product Manager',
			image: `${anthony}`,
			background: '#ffb588',
			bio:
				'Anthony is a team lead, aspiring product manager, and full-stack developer from San Francisco, CA. Anthony loves problem solving and finding solutions to complex issues.',
			github: 'https://github.com/adventurini',
			linkedIn: 'https://www.linkedin.com/in/adventurini/',
			twitter: 'https://twitter.com/adventurini',
			site: '',
		},
		{
			name: 'Kerry McPhearson',
			role: 'Product Design Evangelist',
			image: `${kerry}`,
			background: '#4840ba',
			bio:
				'Kerry is a Product Designer from Atlanta Georgia & reps it hard. He’s a music aficionado that believes design can be accessible & elegant as nature.',
			github: '',
			linkedIn: 'https://www.linkedin.com/in/kerry-mcphearson-9b361193/',
			twitter: 'https://twitter.com/kerrybtone',
			site: '',
		},
		{
			name: 'Alexander Piroumian',
			role: 'Front-End Developer',
			image: `${alex}`,
			background: '#f78539',
			bio:
				'Alexander is a Front-End Web Developer from Santa Clarita,  California and is obsessed with code. He is a father of two and knows six tech stacks. He believes that code is the basis of everything on the internet.',
			github: 'https://github.com/AlexxanderP',
			linkedIn: 'https://www.linkedin.com/in/alexander-piroumian/',
			twitter: 'https://twitter.com/expertgoogler',
			site: 'http://alexanderpiroumian.com',
		},
		{
			name: 'Ruth Philips',
			role: 'Product Designer/UX Writer/Content Strategist',
			image: `${ruth}`,
			background: '#49a2ff',
			bio:
				'Ruth is a Product Designer from the San Francisco Bay Area and loves visiting National Parks. She believes that design is unique and can strike conversations.',
			github: '',
			linkedIn: 'https://www.linkedin.com/in/ruth-philips/',
			twitter: 'https://twitter.com/Ruthmatt3',
			site: '',
		},
		{
			name: 'Jose Montero Jr',
			role: 'Front-End Developer',
			image: `${jose}`,
			background: '#235597',
			bio:
				'Jose is a Front-End Web Developer from Chicago, IL. He loves poker, movies, and baseball. Jose wants to build projects that inspire, uplift, and empowers people.',
			github: 'https://github.com/JoseMarioDev',
			linkedIn: 'https://www.linkedin.com/in/josemariodev/',
			twitter: 'https://twitter.com/josemariodev',
			site: 'https://www.josemario.dev/',
		},
		{
			name: 'Elan Riznis',
			role: 'Front-End Developer',
			image: `${elan}`,
			background: '#d6ad2f',
			bio:
				'Elan is a Front-End Web Developer from Georgia(the country). He is literally next door to Alexander and shares a passion for code, especially on the back-end. Elan loves learning about financial markets, reading, traveling out in nature, and SLEEPING!',
			github: 'https://github.com/Zealll',
			linkedIn: 'https://www.linkedin.com/in/elan-riznis/',
			twitter: 'https://twitter.com/Zeal_l3',
			site: '',
		},
		{
			name: 'Omar Salah',
			role: 'Full Stack Developer',
			image: `${omar}`,
			background: '#d2405b',
			bio:
				'Omar is a great developer from Los Angeles, Ca. Always ready to lend a helping hand he is Genuinely curious and follows that curiosity down to the minute details. He loves to learn regardless of what the new technology is or where it fits into the stack.  ',
			github: 'https://github.com/OmarSalah95',
			linkedIn: 'https://www.linkedin.com/in/omar-salah-78787a180/',
			twitter: 'https://twitter.com/BugSquasher9000',
			site: 'http://omar-salah-eddine.surge.sh',
		},

		{
			name: 'Skyelar Carroll',
			role: 'Full Stack Developer',
			image: `${skyelar}`,
			background: '#4840ba',
			bio:
				'Skyelar is a prodigy Full-Stack Engineer from Palmdale, California. Skelar loves video games..and did we mention code?. He approaches projects from a high level view and sleeps, eats, and breathes code.',
			github: 'https://github.com/Fractured2K',
			linkedIn: 'https://www.linkedin.com/in/skyelar-carroll-7567b217a/',
			twitter: 'https://twitter.com/Fractured2K',
			site: 'https://skyelar.dev',
		},

		{
			name: 'Clark Williams',
			role: 'Front-End Developer',
			image: `${clark}`,
			background: '#0051be',
			bio:
				'Clark is a  Front-End Web Developer from Lehi, Utah and loves code. Clark loves sports and history. Clark strongly believes that code can be used to improve lives for people.',
			github: 'https://github.com/Cwill14',
			linkedIn: 'https://www.linkedin.com/in/clark-williams14/',
			twitter: 'https://twitter.com/clarktwilliams',
			site: 'https://theclarkwilliams.com',
		},
		{
			name: 'Frank Martinez',
			role: 'Full Stack Developer',
			image: `${frank}`,
			background: '#007ea7',
			bio:
				'Frank is a Full-Stack Developer from Kelseyville, California and loves code. When not creating awesome projects, Frank likes to play the drums and Magic the Gathering.  He also enjoys a good cup of coffee over morning contemplation. ',
			github: 'https://github.com/LeTanque',
			linkedIn: 'https://www.linkedin.com/in/frankm3/',
			twitter: 'https://twitter.com/_letanque',
			site: '',
		},
		{
			name: 'Theia ',
			role: 'Our "Go To"',
			image: `${theia}`,
			background: '#82c7b3',
			bio:
				'Theia was always there for the team providing emotional support.  She loves walks in the park, belly rubs, and of course, treats!',
			github: '',
			linkedIn: '',
			twitter: '',
			site: '',
		},
		{
			name: 'Lucy',
			role: 'The Equalizer',
			image: `${Lucy}`,
			background: '#007ea7',
			bio:
				'Lucy created balance and added sass to our team. She resides in Los Angeles, California and enjoys lounging in the sun, being in your personal space, and chasing after neighborhood kids. ',
			github: '',
			linkedIn: '',
			twitter: '',
			site: '',
		},
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
			background: '#235597',
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
			background: '#d6ad2f',
			bio:
				'Bryan is a team lead and full-stack developer from Utah. Bryan has an amazing wife named Sarah, and a beautiful daughter named Kairi. When Bryan is not coding, you will still find him glued to his chair, playing video games.',
			github: 'https://github.com/BryanKAdams',
			linkedIn: 'https://www.linkedin.com/in/chase-collins42/',
			twitter: 'https://twitter.com',
			site: '',
		},
		{
			name: 'Dalton Walker',
			role: 'Full-Stack Developer',
			image: `${dalton}`,
			background: '#49a2ff',
			bio:
				'Dalton comes from sunny Orlando, FL. He enjoys slapping the bass, lifting weights and crunching through some code!',
			github: 'https://github.com/daltonwalkerdw',
			linkedIn: 'https://www.linkedin.com',
			twitter: 'https://twitter.com',
			site: '',
		},
		{
			name: 'Michael Martin',
			role: 'Full-Stack Developer',
			image: `${michaelM}`,
			background: '#f78539',
			bio:
				'Mike hails from the harsh winters in ole Wisconsin. Besides coding Mike enjoys building computers and dabling in video editing, in general he just loves solving problems.',
			github: 'https://github.com/littleonetwo',
			linkedIn: 'https://www.linkedin.com',
			twitter: 'https://twitter.com',
			site: '',
		},
		{
			name: 'Jules Louis',
			role: 'Full-Stack Developer',
			image: `${jules}`,
			background: '#4840ba',
			bio:
				'Jules is a Husband and Father of 2 currently living in South Florida.  A serial entrepreneur with experience in digital media and ecommerce.  When not coding he is a voracious reader.',
			github: 'https://github.com/chefboyrdeuce',
			linkedIn: 'https://www.linkedin.com/julespl',
			twitter: 'https://twitter.com/hustleallday',
			site: '',
		},
	];

	return (
		<main className="squad-container">

			<h2 className="description">Meet the people that make all of the magic happen behind the scenes.</h2>
			<div className="grid-container">
				{/* <img
					src="https://res.cloudinary.com/revitalize/image/upload/v1570036130/about%20page/Circle_2019_sc3ml9.svg"
					alt="background circles and year"
				/> */}
				<div className="squad">
					{squad.map((person, index) => (
						<div className={`person index${index}`} style={{ backgroundColor: `${person.background}` }}>

								<div className="squad-person-info">
									<h2 className="name"> {person.name}</h2>
									<h3 className="role"> {person.role}</h3>
								</div>
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
												aria-label={`Github-link of ${person.name}`}
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
												aria-label={`LinkedIn link of ${person.name}`}
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
												aria-label={`Twitter Link of ${person.name}`}
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
												aria-label={`Personal site of ${person.name}`}
												target="_blank"
												rel="noopener noreferrer"
											>
												<i className="fa fa-user alt"></i>
											</a>
										)}
									</div>
								</div>

						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Squad;
