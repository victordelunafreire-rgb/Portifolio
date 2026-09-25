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
			<div className="flex gap-4 animate-carrousel">
				{skills.map((skill) => (
					<span
						className="font-title bg-coral text-black rounded-full px-4 py-2"
						key={skill + '-original'}
					>
						{skill}
					</span>
				))}
				{skills.map((skill) => (
					<span
						className="font-title bg-coral text-black rounded-full px-4 py-2"
						key={skill + '-clone'}
					>
						{skill}
					</span>
				))}
			</div>
		</section>
	);
}

export default Stack;
