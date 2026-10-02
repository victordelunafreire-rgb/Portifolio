import Bills from '../assets/devbills/devbills_02.png';
import Club from '../assets/devclub/devclub_02.png';

interface HeroProps {
	name: string;
}

function Hero({ name }: HeroProps) {
	return (
		<section
			id="hero"
			className="flex flex-col justify-between items-center min-h-dvh py-12 bg-pink-light"
		>
			<p>{name}</p>
			<h1 className="font-title text-title-hero">Portfólio</h1>
			<a href="#projects">
				<img src={Bills} alt="página dashboard devbills" className="w-26" />
				<img src={Club} alt="página cursos devclub" className="w-26" />
				<p>Venha ver</p>
			</a>
		</section>
	);
}

export default Hero;
