import GitHubIcon from '../assets/icons/github-svgrepo-com.svg';
import GmailIcon from '../assets/icons/google-gmail-svgrepo-com.svg';
import LinkedInIcon from '../assets/icons/linkedin-svgrepo-com.svg';

export interface ContactLink {
	name: string;
	link: string;
	icon: string;
}

function Contact() {
	const contacts: ContactLink[] = [
		{
			name: 'e-mail',
			link: 'mailto:victordelunafreire@gmail.com',
			icon: GmailIcon,
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/victordelunafreire',
			icon: LinkedInIcon,
		},
		{
			name: 'GitHub',
			link: 'https://github.com/victordelunafreire-rgb',
			icon: GitHubIcon,
		},
	];
	return (
		<section
			id="contact"
			className="flex justify-center gap-4 bg-pink py-12 md:py-20 lg:py-28 "
		>
			{contacts.map((contact) => (
				<a
					key={contact.name}
					href={contact.link}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={contact.name}
				>
					<img
						src={contact.icon}
						alt=""
						className="w-32 bg-white outline-4 outline-white rounded-2xl p-1"
					/>
				</a>
			))}
		</section>
	);
}

export default Contact;
