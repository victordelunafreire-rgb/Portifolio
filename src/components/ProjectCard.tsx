export interface Project {
	name: string;
	description: string;
	image: string;
	hoverImage: string;
	link: string;
	color: string;
	offset: string;
	hoverTilt: string;
	circleColor: string;
	circleOffset: string;
}

function ProjectCard({
	name,
	description,
	image,
	hoverImage,
	link,
	color,
	offset,
	hoverTilt,
	circleColor,
	circleOffset,
}: Project) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className={`block w-fit ${offset}`}
		>
			<div className="relative w-fit group">
				<div
					className={`absolute inset-0 m-auto size-64 rounded-full ${circleColor} ${circleOffset} scale-0 group-hover:scale-100 transition duration-300 ease-out`}
				/>
				<div
					className={`relative ${color} group-hover:drop-shadow-none transition duration-300 ease-out`}
				>
					<div className="relative overflow-hidden sticker-outline">
						<img
							src={image}
							alt={name}
							className="max-w-xs max-h-80 relative"
						/>
					</div>
				</div>
				<img
					src={hoverImage}
					alt=""
					className={`absolute top-0 left-0 border-black border-4 rounded-2xl outline-4 outline-white w-2/3 object-cover opacity-0 group-hover:opacity-100 ${hoverTilt} transition duration-300 ease-out`}
				/>
			</div>
			<h3 className="font-title mt-4">{name}</h3>

			<p>{description}</p>
		</a>
	);
}

export default ProjectCard;
