import Burguer_1 from '../assets/devburguer/devburguer_01.png';
import Burguer_2 from '../assets/devburguer/devburguer_02.png';
import BillsMock_01 from '../assets/mockups/devbills_01-front.png';
import BillsMock_02 from '../assets/mockups/devbills_02-front.png';
import ClubMock_01 from '../assets/mockups/devclub_01-front.png';
import ClubMock_02 from '../assets/mockups/devclub_02-front.png';
import TempoMock_01 from '../assets/mockups/devtempo_01.png';
import TempoMock_02 from '../assets/mockups/devtempo_02.png';
import type { Project } from './ProjectCard';
import ProjectCard from './ProjectCard';

function Projects() {
	const projects: Project[] = [
		{
			name: 'Dev Club',
			description: 'lorem ipsum',
			image: ClubMock_01,
			hoverImage: ClubMock_02,
			link: 'https://devclub-page.vercel.app/',
			color: 'drop-shadow-[8px_8px_0_var(--color-pink)]',
			offset: 'xl:mt-0',
		},
		{
			name: 'Dev Burguer',
			description: 'lorem ipsum',
			image: Burguer_1,
			hoverImage: Burguer_2,
			link: '#',
			color: 'drop-shadow-[8px_8px_0_var(--color-blue)]',
			offset: 'xl:mt-75',
		},
		{
			name: 'Dev Bills',
			description: 'lorem ipsum',
			image: BillsMock_01,
			hoverImage: BillsMock_02,
			link: '#',
			color: 'drop-shadow-[8px_8px_0_var(--color-purple)]',
			offset: 'xl:mt-12',
		},
		{
			name: 'Dev Tempo',
			description: 'lorem ipsum',
			image: TempoMock_01,
			hoverImage: TempoMock_02,
			link: '#',
			color: 'drop-shadow-[8px_8px_0_var(--color-coral)]',
			offset: 'xl:mt-64',
		},
	];

	return (
		<section
			id="projects"
			className="grid md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-6 bg-pink-light py-24 px-8 md:gap-8 lg:gap-10"
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
				/>
			))}
		</section>
	);
}

export default Projects;
