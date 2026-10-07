import Bills from '../assets/devbills/devbills_02.png';
import Club from '../assets/devclub/devclub_02.png';
import Animation from './Animation';

interface HeroProps {
	name: string;
}

function Hero({ name }: HeroProps) {
	return (
		<section
			id="hero"
			className="flex flex-col justify-between items-center min-h-dvh py-12 bg-pink-light px-6 lg:px-16"
		>
			<p>{name}</p>
			<div className="flex flex-col items-center">
				<h1 className="font-title text-title-hero leading-none">Portfólio</h1>
				<Animation />
			</div>
			<a
				href="#projects"
				className="flex flex-col items-center gap-4 lg:self-end"
			>
				<div className="flex">
					<img
						src={Bills}
						alt="página dashboard devbills"
						className="w-26 border-4 border-black outline-4 outline-white -rotate-5 aspect-3/4 object-cover"
					/>
					<img
						src={Club}
						alt="página cursos devclub"
						className="w-26 border-4 border-black outline-4 outline-white rotate-10 -ml-5 aspect-3/4 object-cover"
					/>
				</div>
				<p>Venha ver</p>
			</a>
		</section>
	);
}

export default Hero;
