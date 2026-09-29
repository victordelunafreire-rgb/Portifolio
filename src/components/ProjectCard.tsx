export interface Project {
	name: string;
	description: string;
	image: string;
	hoverImage: string;
	link: string;
	color: string;
	offset: string;
}

function ProjectCard({
	name,
	description,
	image,
	hoverImage,
	link,
	color,
	offset,
}: Project) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`block w-fit ${offset}`}
		>
			<div className={`relative w-fit group ${color}`}>
				<div className="relative overflow-hidden sticker-outline">
					<img src={image} alt={name} className="max-w-xs max-h-80 relative" />
					<img
						src={hoverImage}
						alt=""
						className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75 w-full h-full object-cover"
					/>
				</div>
			</div>
			<h3 className="font-title mt-4">{name}</h3>

			<p>{description}</p>
		</a>
	);
}

export default ProjectCard;
