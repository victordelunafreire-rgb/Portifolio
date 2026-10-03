function Stack() {
	const skills: string[] = [
		'React',
		'React Native',
		'Node.js',
		'TypeScript',
		'Tailwind CSS',
		'PostgreSQL',
		'MongoDB',
		'Figma',
		'Docker',
		'Git',
	];

	return (
		<section id="stack" className="overflow-hidden">
			<div className="flex gap-4 animate-carrousel whitespace-nowrap">
				{skills.map((skill) => (
					<div key={skill + '-original'} className="flex gap-4 items-center">
						<span className="font-title text-black">{skill}</span>
						<span className="animate-swing">😎</span>
					</div>
				))}
				{skills.map((skill) => (
					<div key={skill + '-clone'} className="flex gap-4 items-center">
						<span className="font-title text-black whitespace-nowrap">
							{skill}
						</span>
						<span className="animate-swing">😎</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default Stack;
