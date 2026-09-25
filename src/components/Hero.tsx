interface HeroProps {
	name: string;
}

function Hero({ name }: HeroProps) {
	return (
		<section id="hero" className="flex flex-col items-center">
			<p>{name}</p>
			<h1 className="font-title text-9xl">Portifólio</h1>
			<a>
				<img></img>
				<img></img>
				<p>Venha ver</p>
			</a>
		</section>
	);
}

export default Hero;
