import Bills_1 from '../assets/devbills/devbills_01.png';
import Bills_2 from '../assets/devbills/devbills_02.png';
import Burguer_1 from '../assets/devburguer/devburguer_01.png';
import Burguer_2 from '../assets/devburguer/devburguer_02.png';
import Club_1 from '../assets/devclub/devclub_01.png';
import Club_2 from '../assets/devclub/devclub_02.png';
import Tempo_1 from '../assets/devtempo/devtempo_1.jpeg';
import Tempo_2 from '../assets/devtempo/devtempo_2.jpeg';
import type { Project } from './ProjectCard';
import ProjectCard from './ProjectCard';

function Projects() {
	const projects: Project[] = [
		{
			name: 'Dev Club',
			description: 'lorem ipsum',
			image: Club_1,
			hoverImage: Club_2,
			link: 'https://devclub-page.vercel.app/',
			color: 'bg-pink',
		},
		{
			name: 'Dev Burguer',
			description: 'lorem ipsum',
			image: Burguer_1,
			hoverImage: Burguer_2,
			link: '#',
			color: 'bg-blue',
		},
		{
			name: 'Dev Bills',
			description: 'lorem ipsum',
			image: Bills_1,
			hoverImage: Bills_2,
			link: '#',
			color: 'bg-purple',
		},
		{
			name: 'Dev Tempo',
			description: 'lorem ipsum',
			image: Tempo_1,
			hoverImage: Tempo_2,
			link: '#',
			color: 'bg-coral',
		},
	];

	return (
		<section id="projects">
			{projects.map((project) => (
				<ProjectCard
					key={project.name}
					name={project.name}
					description={project.description}
					image={project.image}
					hoverImage={project.hoverImage}
					link={project.link}
					color={project.color}
				/>
			))}
		</section>
	);
}

export default Projects;
