import Bills_02 from '../assets/devbills/devbills_02.png';
import Burguer_1 from '../assets/devburguer/devburguer_01.png';
import Burguer_2 from '../assets/devburguer/devburguer_02.png';
import Club_02 from '../assets/devclub/devclub_02.png';
import Tempo_02 from '../assets/devtempo/devtempo_4.jpeg';
import BillsMock_01 from '../assets/mockups/devbills_01-front.png';
import ClubMock_01 from '../assets/mockups/devclub_01-front.png';
import TempoMock_01 from '../assets/mockups/devtempo_01.png';
import type { Project } from './ProjectCard';
import ProjectCard from './ProjectCard';

function Projects() {
	const projects: Project[] = [
		{
			name: 'Dev Club',
			description: 'lorem ipsum',
			image: ClubMock_01,
			hoverImage: Club_02,
			link: 'https://devclub-page.vercel.app/',
			color: 'drop-shadow-[8px_8px_0_var(--color-pink)]',
			offset: 'xl:mt-0',
			hoverTilt: 'group-hover:translate-x-1/3 group-hover:rotate-6',
			circleColor: 'bg-pink',
			circleOffset: '-translate-x-1/4 -translate-y-1/4',
		},
		{
			name: 'Dev Burguer',
			description: 'lorem ipsum',
			image: Burguer_1,
			hoverImage: Burguer_2,
			link: '#',
			color: 'drop-shadow-[8px_8px_0_var(--color-blue)]',
			offset: 'xl:mt-75',
			hoverTilt: 'group-hover:-translate-x-1/3 group-hover:-rotate-6',
			circleColor: 'bg-blue',
			circleOffset: 'translate-x-1/4 -translate-y-1/4',
		},
		{
			name: 'Dev Bills',
			description: 'lorem ipsum',
			image: BillsMock_01,
			hoverImage: Bills_02,
			link: '#',
			color: 'drop-shadow-[8px_8px_0_var(--color-purple)]',
			offset: 'xl:mt-12',
			hoverTilt: 'group-hover:translate-x-1/3 group-hover:rotate-6',
			circleColor: 'bg-purple',
			circleOffset: '-translate-x-1/4 -translate-y-1/4',
		},
		{
			name: 'Dev Tempo',
			description: 'lorem ipsum',
			image: TempoMock_01,
			hoverImage: Tempo_02,
			link: '#',
			color: 'drop-shadow-[8px_8px_0_var(--color-coral)]',
			offset: 'xl:mt-64',
			hoverTilt: 'group-hover:-translate-x-1/3 group-hover:-rotate-6',
			circleColor: 'bg-coral',
			circleOffset: '-translate-x-1/4 -translate-y-1/4',
		},
	];

	return (
		<section
			id="projects"
			className="grid md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-6 bg-pink-light py-24 px-8 md:gap-8 lg:gap-10 overflow-x-hidden"
		>
			{projects.map((project) => (
				<ProjectCard
					key={project.name}
					name={project.name}
					description={project.description}
					image={project.image}
					hoverImage={project.hoverImage}
					link={project.link}
					color={project.color}
					offset={project.offset}
					hoverTilt={project.hoverTilt}
					circleColor={project.circleColor}
					circleOffset={project.circleOffset}
				/>
			))}
		</section>
	);
}

export default Projects;
