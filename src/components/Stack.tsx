import Docker from '../assets/stacksIcons/docker.svg';
import Figma from '../assets/stacksIcons/figma.svg';
import Git from '../assets/stacksIcons/git.svg';
import Mongo from '../assets/stacksIcons/mongodb.svg';
import Node from '../assets/stacksIcons/nodedotjs.svg';
import Postgre from '../assets/stacksIcons/postgresql.svg';
import React from '../assets/stacksIcons/react.svg';
import Tailwind from '../assets/stacksIcons/tailwindcss.svg';
import TypeScript from '../assets/stacksIcons/typescript.svg';

export interface StackIcons {
	name: string;
	icon: string;
}

function Stack() {
	const skills: StackIcons[] = [
		{
			name: 'React / React Native',
			icon: React,
		},
		{
			name: 'TypeScript',
			icon: TypeScript,
		},
		{
			name: 'Node.js',
			icon: Node,
		},
		{
			name: 'Tailwind CSS',
			icon: Tailwind,
		},
		{
			name: 'Docker',
			icon: Docker,
		},
		{
			name: 'PostgreSQL',
			icon: Postgre,
		},
		{
			name: 'MongoDB',
			icon: Mongo,
		},
		{
			name: 'Figma',
			icon: Figma,
		},
		{
			name: 'Git',
			icon: Git,
		},
	];

	return (
		<section
			id="stack"
			className="overflow-hidden text-2xl bg-purple py-4 border-y-4 border-black"
		>
			<div className="flex gap-10 animate-carrousel whitespace-nowrap w-max">
				{skills.map((skill) => (
					<div
						key={skill.name + '-original'}
						className="flex gap-3 items-center"
					>
						<img src={skill.icon} alt={skill.name} className="w-10 h-10" />
						<span className="font-title text-black uppercase">
							{skill.name}
						</span>
					</div>
				))}
				{skills.map((skill) => (
					<div
						key={skill.name + '-clone'}
						className="flex gap-3 items-center uppercase"
					>
						<img src={skill.icon} alt={skill.name} className="w-10 h-10" />
						<span className="font-title text-black whitespace-nowrap">
							{skill.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default Stack;
