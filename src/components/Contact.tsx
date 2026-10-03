export interface ContactLink {
	name: string;
	link: string;
}

function Contact() {
	const contacts: ContactLink[] = [
		{
			name: 'e-mail',
			link: 'mailto:victordelunafreire@gmail.com',
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/victordelunafreire',
		},
		{
			name: 'GitHub',
			link: 'https://github.com/victordelunafreire-rgb',
		},
	];
	return (
		<section id="contact">
			{contacts.map((contact) => (
				<a
					key={contact.name}
					href={contact.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{contact.name}
				</a>
			))}
		</section>
	);
}

export default Contact;
